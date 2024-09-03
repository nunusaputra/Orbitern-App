import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice";
import InformationSlice from "./Slice/InformationSlice";
import createAccountSlice from "./Slice/createAccountSlice";
import createJobSlice from "./Slice/createJobSlice";
import jobMhsSlice from "./Slice/jobMhsSlice";
import applicantSlice from "./Slice/applicantSlice";
import logbookSlice from "./Slice/logbookSlice";
import loginMhsSlice from "./Slice/loginMhsSlice";
import infoMhsSlice from "./Slice/infoMhsSlice";
import logbookMhsSlice from "./Slice/logbookMhsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    loginMhs: loginMhsSlice,
    info: InformationSlice,
    account: createAccountSlice,
    job: createJobSlice,
    jobMhs: jobMhsSlice,
    app: applicantSlice,
    logbook: logbookSlice,
    infoMhs: infoMhsSlice,
    logbookMhs: logbookMhsSlice,
  },
  devTools: false,
});

export default store;
