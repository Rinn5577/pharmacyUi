import { configureStore } from "@reduxjs/toolkit";
import pharmacySlice from "./pharmacy-slice";
import { type } from "os";

const store=configureStore(
    {
        reducer:{pharmacy:pharmacySlice.reducer}
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;