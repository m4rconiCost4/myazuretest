import React, { Component } from "react";
import { Link } from "react-router-dom";
import cthulu from "../images/cthulu.jpg"
import "./index.css";
class Dashboard extends Component{
    render(){
        return(
        <div id= "body">
              <img src={cthulu} className="logo" alt="logo" />
            <p>This is the Dashboard</p>
        <Link className="links" to="/Settings">
          Settigs {' '}
        </Link>
        <Link className="links" to='History'>
        History
        </Link>
      </div>
        )
    }
}
export default Dashboard;