import { configureStore} from "@reduxjs/toolkit";
import swichReducer from './swich/swichSlice'
import stringReducer from './saerch/searchSlice'
import typeReducer from './type/typeSlicer'

export const store = configureStore({
    reducer:{
        counter:swichReducer,
        string: stringReducer,
        type:typeReducer,
    },
});
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;