import { FETCH_ADMIN, UPDATE_ADMIN, START_LOADING, END_LOADING } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getAdmin = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchAdmin();
    dispatch({ type: FETCH_ADMIN, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updateAdminAction = (updateAccount) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateAdmin(updateAccount);
    dispatch({ type: UPDATE_ADMIN, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
