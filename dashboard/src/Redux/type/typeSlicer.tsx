import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TypeState {
    value:"Add"|"Reset";
}

const initialState: TypeState = {
    value: "Add", 
};

const switchSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        setType(state, action: PayloadAction<"Add"|"Reset">) {
            state.value = action.payload;
          },
    },
});

export const { setType } = switchSlice.actions;

export default switchSlice.reducer;
