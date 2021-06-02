import { FETCH_ADMIN, UPDATE_ADMIN } from "../constants/actionTypes";

export default (admin = [], action) => {
  switch (action.type) {
    case FETCH_ADMIN:
      return action.payload;
    case UPDATE_ADMIN:
      return admin.map((post) => (post._id === action.payload._id ? action.payload : post));
    default:
      return admin;
  }
};

// export default function admin(state = { isLoading: true, admin : []} , action) {
//   switch (action.type) {
//     case START_LOADING:
//       return { ...state, isLoading: true };
//     case END_LOADING:
//       return { ...state, isLoading: false };
//     case FETCH_ADMIN:
//       return { ...state, admin: action.payload };
//     case UPDATE_ADMIN:
//       return { ...state, admin: state.admin.map((adminData) => (adminData._id === action.payload._id ? action.payload : adminData)) };
//     default:
//       return state;
//   }
// }
