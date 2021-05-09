import { FETCH_ADMIN, UPDATE } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getAdmin = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAdmin();
    dispatch({ type: FETCH_ADMIN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateAdmin = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateAdmin(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
