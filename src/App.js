import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Styles/App.css";

// import TeacherRegister from "./Pages/teacherRegister";
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
import { getTeachers } from "./redux/actions/teacherActions";
import View from "./Pages/Page-Children/Students-Children/view";

import StudentForm from "./Pages/studentForm";
import EditStudent from "./Pages/edit";
import { Typography } from "@material-ui/core";
import { NotFound } from "./Not_Found/NotFound";
import TeacherForm from "./Pages/TeacherForm.jsx";
import { getStudents } from "./redux/actions/studentAction";

function App() {
  const user = JSON.parse(localStorage.getItem("account"));
 
  const [adminData, setAdminData] = useState(null);
  const [teacherformData, setTeacherformData] = useState(null);
  const dispatch = useDispatch();
  // dispatch(getAdmin());
  // dispatch(getTeachers());
  // dispatch(getStudents());
  useEffect(() => {
    dispatch(getAdmin());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);


  return (
    <>
      <Router>
      {user?.result?._id ? (
        <NavbarAdmin />
      ) : (
        <Typography variant="h2">Organization Name{"Fetch"}</Typography>)}
        <Switch>
          <Route path="/" exact>
            <AdminSignIn />
          </Route>
          <Route path="/dashboard" exact>
            <DashBoardAdmin />
          </Route>
          <Route path="/register-student" exact>
            <StudentForm />
          </Route>
          <Route path="/students-info" exact>
            <StudentInfo />
          </Route>
          <Route path="/student-info/:id" exact>
            <View />
          </Route>
          <Route path="/edit-student-info/:id" exact>
            <EditStudent />
          </Route>
          {/* <Route path="/register-teacher" exact>
            <TeacherRegister />
          </Route> */}
          <Route path="/register-teacher" exact>
            <TeacherForm />
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
          <Route >
            <NotFound />
          </Route>
        </Switch>
        <BottomNavbar />
      </Router>
    </>
  );
}

export default App;
