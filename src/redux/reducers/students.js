import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

function students(students = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...students, action.payload];
    case UPDATE:
      return students.map((child) =>
        child._id === action.payload._id ? action.payload : child
      );
    case DELETE:
      return students.filter((child) => child._id !== action.payload);
    default:
      return students;
  }
}

export default students;
