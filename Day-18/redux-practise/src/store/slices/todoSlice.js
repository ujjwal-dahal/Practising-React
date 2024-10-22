import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((_, id) => {
        return action.payload != id;
      });
    },
    clearAllData: (state, action) => {
      let arrayLength = state.length;
      state.splice(0, arrayLength);
      return state;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, clearAllData } = todoSlice.actions;
