import {
  FETCH_STUDENTS,
  CREATE_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const createStudent = (studentFormData) => async (dispatch) => {
  try {
    const { data } = await api.createStudent(studentFormData);
    dispatch({ type: CREATE_STUDENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getStudents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStudents();
    dispatch({ type: FETCH_STUDENTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    await await api.deleteStudent(id);
    dispatch({ type: DELETE_STUDENT, payload: id });
  } catch (error) {
    console.log(error);
  }
};
// alloted actions in above

export const updateStudent = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent(id, post);
    dispatch({ type: UPDATE_STUDENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
