import axios from 'axios';
import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import BottomNavbar from '../bottomNavbar';
import NavbarAdmin from './NavbarAdmin/NavbarAdmin';



const Register = () => {
  const [login, setLogin] = useState({
    username: '',
    name: '',
    contact: '',
    email : '',
    uniqueEmployeeID: '',
    password: ''
  });

  function handleChange (e) {
    const {name, value} = e.target;
    setLogin(preLogin => {
      return { 
        ...preLogin,
        [name]: value
      }
    })
  }

  function handleClick (e) {
    e.preventDefault();
    console.log(login);
    const newTeacher = {
      username: login.username,
      password: login.password,
      teachername: login.name,
      contact: login.contact,
      email : login.email,
      uniqueEmployeeID: login.uniqueEmployeeID
    }
    axios.post('http://localhost:5000/adminPosts', newTeacher);
  }
  return (
    <>
      <NavbarAdmin />
      <div className="c-app c-default-layout flex-row align-items-center teacher-register">
    
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>  Register Teacher</h1>
                  <p className="text-muted">Create teacher's account</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput name="username" value={login.username} onChange={handleChange} type="text" placeholder="Username" autoComplete="username" variant="outlined" />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput name="name" value={login.name} onChange={handleChange} type="text" placeholder="Enter full name" autoComplete="username" />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput name="contact" value={login.contact} onChange={handleChange} type="text" placeholder="Enter phone number" autoComplete="username" />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput name="email" value={login.email} onChange={handleChange} type="text" placeholder="Enter email id" autoComplete="username" />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput name="uniqueEmployeeID" value={login.uniqueEmployeeID} onChange={handleChange} type="text" placeholder="Enter unique employee ID" autoComplete="uniqueEmployeeID" />
                  </CInputGroup>
                  
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>

                    <CInput name="password" value={login.password} onChange={handleChange} type="password" placeholder="Password" autoComplete="new-password" />

                  </CInputGroup>
                 
                  <CButton onClick={handleClick} color="success" block>Create Account</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>

      </div>
    
    <BottomNavbar />
    </>
  )
}

export default Register
