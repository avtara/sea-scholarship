import { combineReducers } from "redux";
import {
  contentWebsite,
  universityPartner,
  facultyPartner,
  testimoni
} from "./scholarship";

export default combineReducers({
  contentWebsite,
  universityPartner,
  facultyPartner,
  testimoni
});
