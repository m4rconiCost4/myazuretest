import React, { Component } from "react";
import { Link } from "react-router-dom";
import cthulu from "../images/cthulu.jpg"
import "./index.css";
class History extends Component{
    render(){
        return(
            <div id= "body">
               <img src={cthulu} className="logo" alt="logo" />
                <p>This is the History</p>
            <Link className="links" to="Dagon">
            Dagon {' '}
            </Link>
            <Link className="links" to='Dashboard'>
            Dashboard
            </Link>
          </div>
            )
    }
}
export default History;