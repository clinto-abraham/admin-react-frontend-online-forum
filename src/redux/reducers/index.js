import { combineReducers } from "redux";

import students from "./students";
import auth from "./auth";
import teachers from "./teachers";
import admin from "./admin";

export const reducers = combineReducers({ students, auth, teachers, admin });
