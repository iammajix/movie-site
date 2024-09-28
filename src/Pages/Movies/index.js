import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { pageTitle } from "../../Components/Helpers/TitleMaker";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd'



export default function Movies (){
    const [loading,setloading]=useState(true)
    const [data , setdata] = useState ({
    data : [],
    metadata : {},
    });
    
    useEffect (function(){
        pageTitle("تماشای فیلم و سریال")
    },[]);
    useEffect (function(){
        axios
        .get ("https://moviesapi.codingfront.dev/api/v1/movies?page=1")
        .then(function(responce){
            setdata(responce.data)
            setloading(false);
        })
        .catch(function(error){
            setloading(false);
        })
    },[]);
    function renderFarm(){
        return data.data.map (function ({id,title,poster,genres}){
            return (
                <li key={id}>
                    <Link to={`/movie/${id}`}>
                    <img src= {poster}/>
                    <h3>{title}</h3>
                    <p>{genres.join(" | ")}</p>
                    </Link>
                </li>
            );
        });
    }
    function changePage(current,size) {
            axios
            .get (`https://moviesapi.codingfront.dev/api/v1/movies?page=${current}`)
            .then(function(responce){
                setdata(responce.data)
                
            })
            .catch(function(error){})    
    }
    return (
    
            <div className="list">
                <div className="container">
                   {/* <LoadingOutlined spinnig={loading} size="large">  */}
                    <div className="row align-center">
                <div className="items ">
                    <ul >
                        {renderFarm()}
                    </ul>
                    </div>
                </div>
                {/* </LoadingOutlined> */}
                </div>
                
                <Pagination 
                Current={data.metadata.current_page} 
                total={data.metadata.total_count} 
                pageSize={data.metadata.per_page} 
                showSizeChanger={false}
                align={"center"}
                onChange={changePage}
                />;
                
            </div>


        )

}
