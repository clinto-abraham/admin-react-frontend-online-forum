import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Styles/App.css";

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
import { getTeachers } from "./redux/actions/teacherActions";
import View from "./Pages/Page-Children/Students-Children/view";
import Edit from "./Pages/edit";
import StudentForm from "./Pages/studentForm";

function App() {
  const [adminData, setAdminData] = useState(null);
  const [teacherformData, setTeacherformData] = useState(null);
  const dispatch = useDispatch();

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
            <Edit />
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
        </Switch>
        <BottomNavbar />
      </Router>
    </>
  );
}

export default App;
