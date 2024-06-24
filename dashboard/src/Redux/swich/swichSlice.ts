import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SwitchState {
    value: boolean;
}

const initialState: SwitchState = {
    value: false, 
};

const switchSlice = createSlice({
    name: "switch",
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value; 
        },
    },
});

export const { toggle } = switchSlice.actions;

export default switchSlice.reducer;
