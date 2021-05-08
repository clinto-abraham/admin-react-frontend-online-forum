import { FETCH_ALL, UPDATE } from "../constants/actionTypes";

function admin(admin = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
      return admin.map((adminData) =>
        adminData._id === action.payload._id ? action.payload : adminData
      );
    default:
      return admin;
  }
}

export default admin;
