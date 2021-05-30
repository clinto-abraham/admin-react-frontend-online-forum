import {
  FETCH_TEACHERS,
  UPDATE_TEACHER,
  DELETE_TEACHER,
  CREATE_TEACHER,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getTeachers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTeachers();
    dispatch({ type: FETCH_TEACHERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
// alloted actions in above

export const updateTeacher = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateTeacher(id, post);
    dispatch({ type: UPDATE_TEACHER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTeacher = (id) => async (dispatch) => {
  try {
    await await api.deleteTeacher(id);
    dispatch({ type: DELETE_TEACHER, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const createTeacherAction = (teacherFormData) => async (dispatch) => {
  try {
    const { data } = await api.createTeacherAPI(teacherFormData);
    dispatch({ type: CREATE_TEACHER, payload: data });
  } catch (error) {
    console.log(error);
  }
};