import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CInputCheckbox,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
} from "@coreui/react";
import FormDialogs from "./Page-Children/Dialogues/formDialogue";
import { useDispatch } from "react-redux";
import { createStudent } from "../redux/actions/studentAction";

const initialState = {
  fullname: "",
  email: "",
  rollNumber: "",
  age: "",
  class: "",
  address: "",
  city: "",
  pinCode: "",
  country: "India",
  totalPayment: "",
  paymentReceived: "",
  paymentDue: "",
  textarea: "",
  listening: false,
  reading: false,
  writing: false,
  speaking: false,
  admissionDate: "",
  courseDuration: "",
  courseCompletion: false,
  selectedCourse: "",
  IMPS: false,
  GooglePay: false,
  NEFT: false,
  PhonePe: false,
  CASH: false,
};

const BasicForms = () => {
  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();

  //
  const [studentform, setStudentform] = useState({
    fullname: "",
    email: "",
    rollNumber: "",
    age: "",
    class: "",
    address: "",
    city: "",
    pinCode: "",
    country: "India",
    totalPayment: "",
    paymentReceived: "",
    paymentDue: "",
    textarea: "",
    listening: false,
    reading: false,
    writing: false,
    speaking: false,
    admissionDate: "",
    courseDuration: "",
    courseCompletion: false,
    selectedCourse: "",
    IMPS: false,
    GooglePay: false,
    NEFT: false,
    PhonePe: false,
    CASH: false,
  });

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(studentform, history);
    dispatch(createStudent(studentform, history));
    clear();
  }

  function handleBooleanChange(e) {
    setStudentform({ ...studentform, [e.target.name]: !e.target.value });
  }
  // function switchBar(e) {
  //   setStudentform( (studentform,e) => { ...studentform ,
  // [e.target.name]: !(e.target.value) });
  // }
  const handleChange = (e) =>
    setStudentform({ ...studentform, [e.target.name]: e.target.value });

  function clear() {
    setStudentform(initialState);
  }
  //
  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <div className="form-admin">
          <CRow>
            <CCol xs="12" sm="12">
              <CCard>
                <CCardHeader>Register Student Data</CCardHeader>
                <CCardBody>
                  <CFormGroup row className="my-0" onSubmit={handleSubmit}>
                    <CCol xs="8">
                      <CLabel>Name of student</CLabel>
                      <CInput
                        id="company"
                        placeholder="Enter the full name of student"
                        name="fullname"
                        value={studentform.fullname}
                        onChange={handleChange}
                      />
                    </CCol>
                    <CCol xs="4">
                      <CLabel>Email ID</CLabel>
                      <CInput
                        id="email"
                        placeholder="Enter the email id of student"
                        name="email"
                        value={studentform.email}
                        onChange={handleChange}
                      />
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row className="my-0">
                    <CCol xs="4">
                      <CLabel> Unique Roll Number</CLabel>
                      <CInput
                        id="roll-number"
                        placeholder="Assign roll number for future reference"
                        name="rollNumber"
                        value={studentform.rollNumber}
                        onChange={handleChange}
                      />
                    </CCol>
                    <CCol xs="4">
                      <CLabel>Age of student</CLabel>
                      <CInput
                        id="age"
                        placeholder="15"
                        name="age"
                        type="number"
                        value={studentform.age}
                        onChange={handleChange}
                      />
                    </CCol>
                    <CCol xs="4">
                      <CLabel>Class</CLabel>
                      <CInput
                        id="class"
                        placeholder="10"
                        name="class"
                        value={studentform.class}
                        onChange={handleChange}
                      />
                    </CCol>
                  </CFormGroup>

                  <CFormGroup>
                    <CLabel>Adress of student</CLabel>
                    <CInput
                      id="street"
                      placeholder="Enter street name"
                      name="address"
                      value={studentform.address}
                      onChange={handleChange}
                    />
                  </CFormGroup>

                  <CFormGroup row className="my-0">
                    <CCol xs="4">
                      <CFormGroup>
                        <CLabel>City</CLabel>
                        <CInput
                          id="city"
                          placeholder="Enter name of city"
                          name="city"
                          value={studentform.city}
                          onChange={handleChange}
                        />
                      </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                      <CFormGroup>
                        <CLabel>Postal Code</CLabel>
                        <CInput
                          id="postal-code"
                          placeholder="Postal Code"
                          name="pinCode"
                          value={studentform.pinCode}
                          onChange={handleChange}
                        />
                      </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                      <CFormGroup>
                        <CLabel>Country</CLabel>
                        <CInput
                          id="country"
                          placeholder="India"
                          name="country"
                          value={studentform.country}
                          onChange={handleChange}
                        />
                      </CFormGroup>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row className="my-0">
                    <CCol xs="4">
                      <CFormGroup>
                        <CLabel>Total Payment</CLabel>
                        <div className="controls">
                          <CInputGroup className="input-prepend">
                            <CInputGroupPrepend>
                              <CInputGroupText>Rs</CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput
                              id="appendedPrependedInput"
                              size="16"
                              type="number"
                              name="totalPayment"
                              value={studentform.totalPayment}
                              onChange={handleChange}
                            />
                            <CInputGroupAppend>
                              <CInputGroupText>.00</CInputGroupText>
                            </CInputGroupAppend>
                          </CInputGroup>
                        </div>
                      </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                      <CFormGroup>
                        <CLabel>Payment received</CLabel>
                        <div className="controls">
                          <CInputGroup className="input-prepend">
                            <CInputGroupPrepend>
                              <CInputGroupText>Rs</CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput
                              id="appendedPrependedInput"
                              size="16"
                              type="number"
                              name="paymentReceived"
                              value={studentform.paymentReceived}
                              onChange={handleChange}
                            />
                            <CInputGroupAppend>
                              <CInputGroupText>.00</CInputGroupText>
                            </CInputGroupAppend>
                          </CInputGroup>
                        </div>
                      </CFormGroup>
                    </CCol>

                    <CCol xs="4">
                      <CFormGroup>
                        <CLabel>Payment due</CLabel>
                        <div className="controls">
                          <CInputGroup className="input-prepend">
                            <CInputGroupPrepend>
                              <CInputGroupText>Rs</CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput
                              id="appendedPrependedInput"
                              size="16"
                              type="number"
                              name="paymentDue"
                              value={studentform.paymentDue}
                              onChange={handleChange}
                            />
                            <CInputGroupAppend>
                              <CInputGroupText>.00</CInputGroupText>
                            </CInputGroupAppend>
                          </CInputGroup>
                        </div>
                      </CFormGroup>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol xs="8">
                      <CLabel>Additional description :</CLabel>
                      <CTextarea
                        name="textarea"
                        id="textarea-input"
                        rows="6"
                        placeholder="Additional note for the student's admission..."
                        value={studentform.textarea}
                        onChange={handleChange}
                      />
                    </CCol>
                    <CCol xs="4">
                      <CLabel>Select package</CLabel>

                      <CCol>
                        <CFormGroup variant="checkbox" className="checkbox">
                          <CInputCheckbox
                            id="checkbox1"
                            name="listening"
                            value={studentform.listening}
                            onChange={handleBooleanChange}
                          />
                          <CLabel
                            variant="checkbox"
                            className="form-check-label"
                          >
                            Listening
                          </CLabel>
                        </CFormGroup>

                        <CFormGroup variant="checkbox" className="checkbox">
                          <CInputCheckbox
                            id="checkbox2"
                            name="reading"
                            onChange={handleBooleanChange}
                            value={studentform.reading}
                          />
                          <CLabel
                            variant="checkbox"
                            className="form-check-label"
                          >
                            Reading
                          </CLabel>
                        </CFormGroup>

                        <CFormGroup variant="checkbox" className="checkbox">
                          <CInputCheckbox
                            id="checkbox3"
                            name="writing"
                            onChange={handleBooleanChange}
                            value={studentform.writing}
                          />
                          <CLabel
                            variant="checkbox"
                            className="form-check-label"
                          >
                            Writing
                          </CLabel>
                        </CFormGroup>
                        <CFormGroup variant="checkbox" className="checkbox">
                          <CInputCheckbox
                            id="checkbox4"
                            name="speaking"
                            onChange={handleBooleanChange}
                            value={studentform.speaking}
                          />
                          <CLabel
                            variant="checkbox"
                            className="form-check-label"
                          >
                            Speaking
                          </CLabel>
                        </CFormGroup>
                      </CCol>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol xs="4">
                      <CLabel>Date of admission</CLabel>
                      <CInput
                        type="date"
                        id="date-input"
                        name="admissionDate"
                        onChange={handleChange}
                        value={studentform.admissionDate}
                        placeholder="date"
                      />
                    </CCol>

                    <CCol xs="4">
                      <CLabel>Course duration</CLabel>
                      <CInputGroup className="input-prepend">
                        <CInput
                          id="class-1"
                          placeholder="6"
                          name="courseDuration"
                          onChange={handleChange}
                          type="number"
                          value={studentform.courseDuration}
                        />
                        <CInputGroupAppend>
                          <CInputGroupText>Months</CInputGroupText>
                        </CInputGroupAppend>
                      </CInputGroup>
                    </CCol>

                    <CCol xs="4">
                      <CLabel>Course completion certificate</CLabel>
                      <CInput
                        id="disabled-input"
                        name="courseCompletion"
                        placeholder="Course completion : False"
                        disabled
                        onChange={handleChange}
                        value={studentform.courseCompletion}
                      />
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol xs="4">
                      <CLabel>Select mode of study</CLabel>
                      <CSelect custom name="selectedCourse" id="select">
                        onChange={handleBooleanChange}
                        <option value={studentform.selectedCourse}>
                          Please select
                        </option>
                        onChange={handleBooleanChange}
                        <option value="Online">Online Course </option>
                        onChange={handleBooleanChange}
                        <option value="Offline">Offline Course </option>
                        onChange={handleBooleanChange}
                        <option value="Online + Offline">
                          Online + Offline Course
                        </option>
                      </CSelect>
                    </CCol>

                    <CCol xs="8">
                      <CLabel>Select payment methods</CLabel>
                      <CCol>
                        <CFormGroup variant="custom-checkbox" inline>
                          <CInputCheckbox
                            custom
                            id="inline-checkbox1"
                            name="IMPS"
                            onChange={handleBooleanChange}
                            value={studentform.IMPS}
                          />
                          <CLabel variant="custom-checkbox">IMPS</CLabel>
                        </CFormGroup>

                        <CFormGroup variant="custom-checkbox" inline>
                          <CInputCheckbox
                            custom
                            id="inline-checkbox2"
                            name="NEFT"
                            onChange={handleBooleanChange}
                            value={studentform.NEFT}
                          />
                          <CLabel variant="custom-checkbox">NEFT</CLabel>
                        </CFormGroup>

                        <CFormGroup variant="custom-checkbox" inline>
                          <CInputCheckbox
                            custom
                            id="inline-checkbox2"
                            name="GooglePay"
                            onChange={handleBooleanChange}
                            value={studentform.GooglePay}
                          />
                          <CLabel variant="custom-checkbox">Google Pay</CLabel>
                        </CFormGroup>

                        <CFormGroup variant="custom-checkbox" inline>
                          <CInputCheckbox
                            custom
                            id="inline-checkbox3"
                            name="PhonePe"
                            onChange={handleBooleanChange}
                            value={studentform.PhonePe}
                          />
                          <CLabel variant="custom-checkbox">PhonePe</CLabel>
                        </CFormGroup>

                        <CFormGroup variant="custom-checkbox" inline>
                          <CInputCheckbox
                            custom
                            id="inline-checkbox4"
                            name="CASH"
                            onChange={handleBooleanChange}
                            value={true}
                          />
                          <CLabel variant="custom-checkbox">CASH</CLabel>
                        </CFormGroup>
                      </CCol>
                    </CCol>
                  </CFormGroup>

                  <CRow>
                    <CCol xs="12">
                      <CCard>
                        <CCardBody>
                          <CForm className="form-horizontal">
                            <div className="form-actions">
                              <FormDialogs studentform={studentform} />
                              <CButton
                                className="cancel"
                                color="primary"
                                type="submit"
                              >
                                Submit
                              </CButton>
                              <CButton
                                className="cancel"
                                color="secondary"
                                onClick={clear}
                              >
                                Cancel
                              </CButton>
                            </div>
                          </CForm>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </div>
      )}
    </>
  );
};

export default BasicForms;
