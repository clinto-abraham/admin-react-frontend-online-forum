import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart as BarChartIcon,
  
 
} from "react-feather";

function NavbarAdmin() {
  return (
    <>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Organization Name</h4>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 padding-grid-top-bottom">
                <Link to="/dashboard-admin" className="link">
                  <BarChartIcon className="icon" />
                  Dashboard
                </Link>
              </div>


              
              <div class="dropdown link col-xs-12 col-sm-12 col-md-12 col-lg-2 " >
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{backgroundColor:"inherit", color:"inherit"}}
                >
                  Student Section
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"      >
                <Link to="/register-student" className="link dropdown-item" style={{color:"inherit"}}>
                  Register Student
                </Link>
                <Link to="/students-info" className="link dropdown-item" style={{color:"inherit"}}>
                  Student Info
                </Link>
                </div>
              </div>    
              

             

              <div class="dropdown link col-xs-12 col-sm-12 col-md-12 col-lg-2" >
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{backgroundColor:"inherit", color:"inherit"}}
                >
                  Teacher Section
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link to="/register-teacher" className="link dropdown-item" style={{color:"inherit"}}>
                  Register Teacher
                </Link>
                <Link to="/assign-teachers" className="link dropdown-item" style={{color:"inherit"}}>
                  Assign Teacher
                </Link>
                </div>
              </div>    


        
              
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 padding-grid">
                <Link to="/salary-track" className="link">
                  Salary 
                </Link>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 padding-grid">
                <Link to="/update-account" className="link">
                   Settings
                </Link>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-1 padding-grid">
                <Link to="/" className="link">
                   Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </>
  );
}
export default NavbarAdmin;
