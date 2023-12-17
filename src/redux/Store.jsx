import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

const Store = configureStore({
    reducer: { task : taskReducer}
})

export default Store