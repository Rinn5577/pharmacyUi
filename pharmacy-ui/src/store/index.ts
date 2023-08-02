import { configureStore } from "@reduxjs/toolkit";
import pharmacySlice from "./slice/pharmacy-slice";
import utilsSlice from "./slice/utils-slice";

const store = configureStore({
  reducer: { pharmacy: pharmacySlice.reducer, utils: utilsSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
