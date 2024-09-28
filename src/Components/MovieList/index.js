import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pageTitle } from "../Helpers/TitleMaker";
import "./style.css";
import PrimaryLayout from "../Layout/PrimaryLayout";


export default function MovieList ({title,link,pageId}){
    const [loading , setLoading]=useState (false);
    const [data ,setData] = useState({
    data :[],
    matadata :{},
});
    useEffect (function(){
      axios
      .get (`https://moviesapi.codingfront.dev/api/v1/movies?page=${pageId}`)
      .then(function(response){
        setData (response.data);
      })
      .catch(function(erorr){
        // alarms ("خطا در دریافت اطلاعات لطفا مجدد امتحان کنید ");
        setLoading(false);
      });
    },[]);
    useEffect (function(){
        pageTitle("تماشای فیلم و سریال")
    },[]);
    function renderFarm (){
        return data.data.map(function({id,title,poster,genres}){
        return (
            <li key={id}>
                <Link to={`/movie/${id}`}>
                <h3>{title}</h3>
                <img src={poster}/>
                <p>{genres.join(" | ")}</p>
                </Link>
            </li>
        );
    });
    }
    return (
        <PrimaryLayout>{
            
            loading == true ? (<h1>لطفا شکیبا باشید . . . </h1>)
            : (
        <Fragment>
                    <h2> {title= "Special"}{link="/"}  {pageId="4"}</h2>
            <div className="list">
                <div className="container">
                    <div className="row align-center">
                <div className="title ">
                    <h2>{title}</h2>
                </div>
                <div >
                <div className="items ">
                    <ul >
                        {renderFarm()}
                    </ul>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </Fragment>
        )
}
        </PrimaryLayout>
    );
}
