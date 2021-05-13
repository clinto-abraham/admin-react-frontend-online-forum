import {
  FETCH_TEACHERS,
  DELETE_TEACHER,
  CREATE_TEACHER,
  UPDATE_TEACHER,
} from "../constants/actionTypes";

function teachers(teachers = [], action) {
  switch (action.type) {
    case FETCH_TEACHERS:
      return action.payload;
    case CREATE_TEACHER:
      return [...teachers, action.payload];
    case UPDATE_TEACHER:
      return teachers.map((teacherData) =>
        teacherData._id === action.payload._id ? action.payload : teacherData
      );
    case DELETE_TEACHER:
      return teachers.filter(
        (teacherData) => teacherData._id !== action.payload
      );
    default:
      return teachers;
  }
}

export default teachers;
