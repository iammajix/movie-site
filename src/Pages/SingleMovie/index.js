import { useParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { itemTitle } from "../../Components/Helpers/TitleMaker";


export default function SingleMovie (){
    const {filmdetail}=useParams ();
    const [data,setData]=useState({});
    const [loading , setLoading]=useState (false);
    useEffect (function(){
        setLoading(true);
        axios
        .get(`https://moviesapi.codingfront.dev/api/v1/movies/${filmdetail}`)
        .then (function (response){
            setData(response.data);
            setLoading(false);
        })
        .catch (function (){
            // alarms ("خطا در دریافت اطلاعات لطفا مجدد امتحان کنید ");
        setLoading(false);
        });
    },[] );
    useEffect (function (){
      itemTitle(data.title)
    },[data]);
    return (
        
        <PrimaryLayout>
            {
                loading == true ? (<h1>لطفا شکیبا باشید . . . </h1>)
                : (
            <Fragment>
                
            <div><img className="background-images" src={data.images}/></div>
            <div className="movie">
            <div className="container">
            <div className="row align-center">
            <div className="left col-6">
            <h2>{data.title}</h2>
            <img src={data.poster}/>
            </div>
            <div className="right col-6">
              <div className="caption">  
            <p>Relased : {data.released}</p>
            <p>Director : {data.director}</p>
            {/* <p>Genres : {`${data.genres.join(" | ")}`}</p> */}
            {/* <p>Genres : {data.genres.join("|")}</p> */}
            <p>Genres : {data.genres}</p>
            <p>Country : {data.country}</p>
            <p>Actors : {data.actors}</p>
            <p>Imdb rating :{data.imdb_rating}</p>
            <p>Details : {data.plot}</p>
            <a href={`https://imdb.com/title/${data.imdb_id}`}target="_blank">Show the movie on the Imdb</a>
            </div> 
            </div>
            </div>
            </div>
            </div>
            </Fragment>
            )}
            
        </PrimaryLayout>
        
    );
}
