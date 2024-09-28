import { Fragment, useEffect, useState } from "react";
import "./style.css";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import axios from "axios";
import MovieList from "../../Components/MovieList";
import Movies from "../Movies";

export default function Homepage (){
    return (
       <Fragment>
        <PrimaryLayout>
            <Movies/>
        </PrimaryLayout>
        </Fragment>
    )
}