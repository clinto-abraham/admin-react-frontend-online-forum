import {
  FETCH_STUDENTS,
  CREATE,
  UPDATE,
  DELETE_STUDENT,
} from "../constants/actionTypes";

function students(students = [], action) {
  switch (action.type) {
    case FETCH_STUDENTS:
      return action.payload;
    case CREATE:
      return [...students, action.payload];
    case UPDATE:
      return students.map((child) =>
        child._id === action.payload._id ? action.payload : child
      );
    case DELETE_STUDENT:
      return students.filter((child) => child._id !== action.payload);
    default:
      return students;
  }
}

export default students;
