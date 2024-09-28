import axios from "axios"
import { useEffect, useState } from "react"
import { AutoComplete } from 'antd';

export default function Search(){
    const [data,setData]=useState({
        data :[],
        metadata : {},
    });
    function type(e){
        if (e.code=="Enter"){
     axios
     .get(`https://moviesapi.codingfront.dev/api/v1/movies?q=${e.target.value}`)
     .then(function(responce){
        setData(responce.data);
     })    
     .catch(function(error){})
    }            
        }

    function renderFarm(){
        if (data.data.lenght==0){
            return "Not found"
        }
        return data.data.map(function({id,title,poster}){
            return (
                <li key={id}>
                    <h5>{title}</h5>
                </li>
            )
        })
    }
    return (
            <div className="search">
                <AutoComplete
    style={{
      width: 200,
    }}
    onChange={type}
    options={data.data.title}
    placeholder="Search ..."
    filterOption={(e, option) =>
      option.value.toUpperCase().indexOf(e.toUpperCase()) !== -1
    }
  />
                {/* <input onKeyDown={type} placeholder="Search..."/> */}
                <div className="movies">
                    <ul>
                        {renderFarm()}
                    </ul>
                </div>
            </div>
            
    )
}