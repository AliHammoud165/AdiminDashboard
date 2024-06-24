import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StringState {
  stringValue: string;
}

const initialState: StringState = {
  stringValue: '',
};

const stringSlice = createSlice({
  name: 'string',
  initialState,
  reducers: {
    setString(state, action: PayloadAction<string>) {
      state.stringValue = action.payload;
    },
  },
});

export const { setString } = stringSlice.actions;

export default stringSlice.reducer;
