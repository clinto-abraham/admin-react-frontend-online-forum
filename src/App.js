import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Styles/App.css";

import AdminSignIn from "./Pages/AdminSignIn.jsx";
import DashBoardAdmin from "./Pages/Admin.jsx";
import StudentInfo from "./Pages/StudentInfo.jsx";
import SalaryTrack from "./Pages/SalaryTrack.jsx";
import AccountSettingsAdmin from "./Pages/AccountSettingsAdmin.jsx";
import NavbarAdmin from "./Navbars/NavbarAdmin.jsx";
import BottomNavbar from "./Navbars/bottomNavbar.jsx";
import TeacherAssigning from "./Pages/teacherAssign.jsx";
import StudentForm from "./Pages/studentForm.jsx";
import EditStudent from "./Pages/Page-Children/Students-Children/edit.jsx";
// import EditCopy from "./Pages/Page-Children/Students-Children/editCopy.jsx";
import TeacherForm from "./Pages/TeacherForm.jsx";
import View from "./Pages/Page-Children/Students-Children/view.jsx";

import { useDispatch } from "react-redux";
import { getAdmin } from "./redux/actions/adminAction";
import { getTeachers } from "./redux/actions/teacherActions";
import { Typography } from "@material-ui/core";
import { NotFound } from "./Not_Found/NotFound";
import { getStudents } from "./redux/actions/studentAction";

function App() {
  const user = JSON.parse(localStorage.getItem("account"));
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  useEffect(() => {
    dispatch(getAdmin());
  }, [state, dispatch]);

  useEffect(() => {
    dispatch(getTeachers());
  }, [state, dispatch]);

  useEffect(() => {
    dispatch(getStudents());
  }, [state, dispatch]);

  return (
    <>
      <Router>
        {user?.result?._id ? (
          <NavbarAdmin />
        ) : (
          <Typography variant="h2">Organization Name{"Fetch"}</Typography>
        )}
        <Switch>
          <Route path="/" exact>
            <AdminSignIn state={state} setState={setState} />
          </Route>
          <Route path="/dashboard" exact>
            <DashBoardAdmin state={state} setState={setState} />
          </Route>
          <Route path="/register-student" exact>
            <StudentForm state={state} setState={setState} />
          </Route>
          <Route path="/students-info" exact>
            <StudentInfo state={state} setState={setState} />
          </Route>
          <Route path="/student-info/:id" exact>
            <View state={state} setState={setState} />
          </Route>
          <Route path="/edit-student-info/:id" exact>
            <EditStudent state={state} setState={setState} />
          </Route>
          {/* <Route path="/edit-student-info/:id" exact>
            <EditCopy state={state} setState={setState} />
          </Route> */}
          
          <Route path="/register-teacher" exact>
            <TeacherForm state={state} setState={setState} />
          </Route>
          <Route path="/assign-teachers" exact>
            <TeacherAssigning state={state} setState={setState} />
          </Route>
          <Route path="/salary-track" exact>
            <SalaryTrack state={state} setState={setState} />
          </Route>
          <Route path="/update-account" exact>
            <AccountSettingsAdmin state={state} setState={setState} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <BottomNavbar />
      </Router>
    </>
  );
}

export default App;
