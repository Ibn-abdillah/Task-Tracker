import { createSlice } from "@reduxjs/toolkit";

const taskTracker = createSlice({
    name: 'task',
    initialState: {},
    reducers: {
        addTask : (state, action) => {
            state.push({id: Date.now(), text: action.payload, completed : false });
        },

        handleDelete : (state, action) => {
            state.filter(task => task.id !== action.payload)
        }
    }
})


export default taskTracker.actions
export const {addTask, handleDelete} = taskTracker.reducer