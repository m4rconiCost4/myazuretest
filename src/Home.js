import React, { Component } from "react";
import { Link } from "react-router-dom";
import cthulu from "./images/cthulu.jpg"
import "./Components/index.css";
class Home extends Component{
    render(){
        return(
        <div id= "body">
              <img src={cthulu} className="logo" alt="logo" />
            <p>H. P. Lovecraft histories!</p>
        <Link className="links" to="Dagon">
          Dagon {' '}
        </Link>
        <Link className="links" to='Cthulu'>
        Cthulu {' '}
        </Link>
        <Link className="links" to='Azathoth'>
        Azathoth
        </Link>
      </div>
        )
    }
}
export default Home;