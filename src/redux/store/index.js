import { configureStore } from "@reduxjs/toolkit";
import Music from "../reducers/Obtainmusic";

const store=configureStore({
    reducer:Music
})

export default store