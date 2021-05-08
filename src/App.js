import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Styles/App.css";

import BasicForms from "./Pages/form";
import TeacherRegister from "./Pages/teacherRegister";
import TeacherAssigning from "./Pages/teacherAssign";
import AdminSignIn from "./Pages/AdminSignIn";
import DashBoardAdmin from "./Pages/Admin";
import StudentInfo from "./Pages/StudentInfo";
import SalaryTrack from "./Pages/SalaryTrack";
import AccountSettingsAdmin from "./Pages/AccountSettingsAdmin";
import NavbarAdmin from "./Navbars/NavbarAdmin";
import BottomNavbar from "./Navbars/bottomNavbar";
import { useDispatch } from "react-redux";
import { getAdmin } from "./redux/actions/adminAction";
import { getStudents } from "./redux/actions/studentAction";
import { getTeachers } from "./redux/actions/teacherActions";

function App() {
  const [studentformData, setStudentformData] = useState(null);
  const [adminData, setAdminData] = useState(null);
  const [teacherformData, setTeacherformData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudents());
  }, [studentformData, dispatch]);

  useEffect(() => {
    dispatch(getAdmin());
  }, [adminData, dispatch]);

  useEffect(() => {
    dispatch(getTeachers());
  }, [teacherformData, dispatch]);

  return (
    <>
      <Router>
        <NavbarAdmin />
        <Switch>
          <Route path="/dashboard" exact>
            <DashBoardAdmin
              studentformData={studentformData}
              teacherformData={teacherformData}
            />
          </Route>
          <Route path="/register-student" exact>
            <BasicForms
              studentformData={studentformData}
              setStudentformData={setStudentformData}
            />
          </Route>
          <Route path="/students-info" exact>
            <StudentInfo
              studentformData={studentformData}
              setStudentformData={setStudentformData}
            />
          </Route>
          <Route path="/register-teacher" exact>
            <TeacherRegister />
          </Route>
          <Route path="/assign-teachers" exact>
            <TeacherAssigning
              teacherformData={teacherformData}
              setTeacherformData={setTeacherformData}
            />
          </Route>
          <Route path="/salary-track" exact>
            <SalaryTrack
              teacherformData={teacherformData}
              adminData={adminData}
            />
          </Route>
          <Route path="/update-account" exact>
            <AccountSettingsAdmin
              adminData={adminData}
              setAdminData={setAdminData}
            />
          </Route>
          <Route path="/" exact>
            <AdminSignIn />
          </Route>
        </Switch>
        <BottomNavbar />
      </Router>
    </>
  );
}

export default App;
