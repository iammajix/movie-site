import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "../../Pages/HomePage"
import SingleMovie from "../../Pages/SingleMovie"
import Movies from "../../Pages/Movies"
import MovieList from "../MovieList"
import Search from "../Search"
export default function MyRouter (){
    const routes = createBrowserRouter ([
        {
            path :"/",
            element : <Homepage/>,
        },
        {
            path :"/movie/:filmdetail",
            element : <SingleMovie/>,
        },
        {
            path :"movielist",
            element : <MovieList/>,
        },

        {
            path :"movies",
            element : <Movies/>,
        },
        {
            path :"search",
            element : <Search/>,
        },

    ])
    return <RouterProvider router={routes}/>
}