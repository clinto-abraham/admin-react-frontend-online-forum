import { FETCH_TEACHERS, UPDATE, DELETE } from "../constants/actionTypes";
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
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTeacher = (id) => async (dispatch) => {
  try {
    await await api.deleteTeacher(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
