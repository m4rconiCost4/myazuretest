import React, { Component } from "react";
import { Link } from "react-router-dom";
import cthulu from "./images/cthulu.jpg"
import "./Components/index.css";
class Home extends Component{
    render(){
        return(
        <div id= "body">
              <img src={cthulu} className="logo" alt="logo" />
            <p>This is the Home</p>
        <Link className="links" to="Dagon">
          Dagon {' '}
        </Link>
        <Link className="links" to='History'>
        History {' '}
        </Link>
        <Link className="links" to='Dashboard'>
        Dashboard
        </Link>
      </div>
        )
    }
}
export default Home;