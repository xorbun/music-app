import { configureStore } from "@reduxjs/toolkit";
import music from "../reducers/Obtainmusic";


const store=configureStore({
    reducer:music
})

export default store