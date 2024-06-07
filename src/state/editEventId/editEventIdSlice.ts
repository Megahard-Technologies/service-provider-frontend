import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface EditEventIdState {
    editEventId: number;
}

const initialState: EditEventIdState = {
    editEventId: 0,
};

const editEventIdSlice = createSlice({
    name: 'editEventId',
    initialState,
    reducers: {
        setEditEventId: (state, action: PayloadAction<number>) => {
            state.editEventId = action.payload;
        },
    },
});

export const {setEditEventId} = editEventIdSlice.actions;
export default editEventIdSlice.reducer;