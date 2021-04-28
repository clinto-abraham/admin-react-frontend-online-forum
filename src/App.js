
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';





import Form  from './Admin/form';
import TeacherRegister from './Admin/teacherRegister';

import TeacherAssigning from './Admin/teacherAssign';
import AdminSignIn from './Admin/AdminSignIn';
import DashBoardAdmin from './Admin/Admin';
import StudentInfo from './Admin/StudentInfo';
import SalaryTrack from './Admin/SalaryTrack';
import AccountSettingsAdmin from './Admin/AccountSettingsAdmin';

function App() {
  return (
    <>
    
    <Router>
      <Switch>
      <Route path="/admin-sign-in" component={AdminSignIn} exact />
      <Route path="/dashboard-admin" component={DashBoardAdmin} exact />
      <Route path="/register-student" component={Form} exact />
      <Route path="/students-info" component={StudentInfo} exact />
      <Route path="/register-teacher" component={TeacherRegister} exact />
      <Route path="/assign-teachers" component={TeacherAssigning} exact />
      <Route path="/salary-track" component={SalaryTrack} exact />
      <Route path="/update-account" component={AccountSettingsAdmin} exact />
      <Route path="/" component={AdminSignIn} exact />
      </Switch>
    </Router>
  </>
  );
}

export default App;






