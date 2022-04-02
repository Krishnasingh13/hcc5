import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import personalDetailsReducer from "./personalDetailsReducer";
import authReducer from "./authReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  personalDetails: personalDetailsReducer,
  auth: authReducer,
  filter: filterReducer,

});

export default rootReducer;
