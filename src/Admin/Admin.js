import React from "react";
import BottomNavbar from "../bottomNavbar";
import NavbarAdmin from "./NavbarAdmin/NavbarAdmin";


import DataStudents from "./Dashboard-Components/datastudents";
import TotalMoneyEarned from "./Dashboard-Components/moneyEarned";
import ProgressBarChart from "./Dashboard-Components/progressBarChart";
import StudentAssignedCount from "./Dashboard-Components/studentCount";
import TasksProgress from "./Dashboard-Components/taskProgress";

import DoughnutChart from "./Dashboard-Components/DoughnutChart";

import {CCardBody, CCardHeader, CCol, CFormGroup } from "@coreui/react";


function DashBoardAdmin() {
  return (
    <>
      <NavbarAdmin />
      <div className="grid">
        <CCardHeader>
        <CCardBody>

          <CFormGroup row className="my-0 padding-grid">
            
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 padding-grid">
              <DoughnutChart />
            </div>
           
            
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 padding-grid">
              <TasksProgress />
            </div>
            
          </CFormGroup>

          <CFormGroup row className="my-12 padding-grid">
            <CCol xs="12">
              <ProgressBarChart /> 
            </CCol>
          </CFormGroup>


          <CFormGroup row className="my-0">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 padding-grid">
          
            <TotalMoneyEarned />
            
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 padding-grid">
            
              <StudentAssignedCount />
            
            </div>
          </CFormGroup>

          
          
        </CCardBody>
        </CCardHeader>
      </div>
      <div className="grid">
      <CCardHeader>
      <DataStudents />
      </CCardHeader>
      </div>
      <BottomNavbar />
    </>
  );
}

export default DashBoardAdmin;





