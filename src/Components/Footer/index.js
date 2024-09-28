import { Link } from "react-router-dom";
import "./style.css";

export default function Footer (){
    const menu = [
        {
            name : "About us" ,
            link : "/" ,
        },
        {
            name : "Contact" ,
            link : "/" ,
        },
        {
            name : "Privacy Policy" ,
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
        <div className="footer">
            <div className="container">
            {/* <div className="flex align-center space-between" >
                <div className="left">    
                <div className="flex">
                    </div>
                    </div> */}
                <div className="right">
                <div className="menu">
                    <ul className="flex space-between">{renderMenu()}</ul>
                </div>
                </div>
            </div>
            
            </div>
            // </div>
    )
}