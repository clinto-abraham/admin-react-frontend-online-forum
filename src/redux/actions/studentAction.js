import {
  FETCH_STUDENTS,
  CREATE,
  UPDATE,
  DELETE,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const createStudent = (studentform) => async (dispatch) => {
  try {
    const { data } = await api.createStudent(studentform);
    dispatch({ type: CREATE, payload: data });
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
// alloted actions in above

export const updateStudent = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deleteStudent(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
