import { Link } from "react-router-dom";
import "./style.css";
import MovieList from "../MovieList";
import { useState,axios } from "react";
import Search from "../Search";

export default function Header (){
    const menu = [
        {
            name : "HOME" ,
            link : "/" ,
        },
        {
            name : "SPECIALS" ,
            link : "movielist",
        },
        {
            name : "PRICING PLAN" ,
            link : "/" ,
        },
        {
            name : "PAGES" ,
            link : "/" ,
        },
    ]
    function renderMenu () {
        return menu.map(function(item,index){
            const {name , link}=item;
           return ( <li key={index}>
                <Link to={link}>{name}</Link>
            </li>
            );
        })
    }
    return (
        <div className="header">
            <div className="container">
            <div className="flex align-center space-between" >
                <div className="left">    
                <div className="flex">
                    <div className="search">
                                <ul><Search/></ul>
                            </div>
                            </div>
                            </div>
                <div className="menu">
                    <Link to ="/"><img src="../../images/logo1.png"/></Link>
                    <ul className="flex ">{renderMenu()}</ul>
                </div>
                </div>
            </div>
            </div>
    )
}