import {configureStore} from "@reduxjs/toolkit";
import editEventIdReducer from "./editEventId/editEventIdSlice.ts";
export const store = configureStore({
    reducer: {
        editEventId: editEventIdReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
