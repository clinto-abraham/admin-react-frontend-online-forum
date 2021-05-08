import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

function teachers(teachers = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...teachers, action.payload];
    case UPDATE:
      return teachers.map((teacherData) =>
        teacherData._id === action.payload._id ? action.payload : teacherData
      );
    case DELETE:
      return teachers.filter(
        (teacherData) => teacherData._id !== action.payload
      );
    default:
      return teachers;
  }
}

export default teachers;
