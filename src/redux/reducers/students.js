import {
  FETCH_STUDENTS,
  DELETE_STUDENT,
  CREATE_STUDENT,
  UPDATE_STUDENT,
  START_LOADING,
  END_LOADING,
  FETCH_PAGE_STUDENTS,
} from "../constants/actionTypes";

function students(state = { isLoading: true, students: [] }, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_PAGE_STUDENTS:
      return {
        ...state,
        students: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_STUDENTS:
      return { ...state, students: action.payload.data };
    case CREATE_STUDENT:
      return { ...state, students: [...state.students, action.payload] };
    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
}

export default students;
