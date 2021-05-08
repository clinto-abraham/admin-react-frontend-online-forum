import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("account")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("account")).token
    }`;
  }

  return req;
});

// working api below
// student
export const createStudent = (studentform) =>
  API.post("/create-student", studentform);
export const fetchStudents = () => API.get("/students-info");
export const updateStudent = (id, updatedPost) =>
  API.patch(`/update-student/${id}`, updatedPost);
export const deleteStudent = (id) => API.delete(`/delete-student/${id}`);

// teacher
export const signUp = (registerForm) =>
  API.post("/teacher-signup", registerForm);
export const fetchTeachers = () => API.get("/teachers-info");
export const updateTeacher = (id, updatedPost) =>
  API.patch(`/update-teacher/${id}`, updatedPost);
export const deleteTeacher = (id) => API.delete(`/delete-teacher/${id}`);

// admin
export const signIn = (formData) => API.post("/admin-signin", formData);
export const fetchAdmin = () => API.get("/admin-info");
export const updateAdmin = (id, updatedPost) =>
  API.patch(`/update-admin/${id}`, updatedPost);
