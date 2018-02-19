import React, { Component } from "react";
import { Link } from "react-router-dom";
import cthulu from "../images/cthulu.jpg"
import "./index.css";
class Settings extends Component{
    render(){
        return(
            <div id= "body">
               <img src={cthulu} className="logo" alt="logo" />
                <p>This is the Settigs</p>
            <Link className="links" to="/History">
            History {' '}
            </Link>
            <Link className="links" to='Dashboard'>
            Dashboard
            </Link>
          </div>
            )
    }
}
export default Settings;