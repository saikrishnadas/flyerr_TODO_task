import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  completed: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add_todo(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    delete_todo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completed_todo(state, action) {
      console.log(state);
      state.completed = [
        ...state.completed,
        state.todos.find((todo) => todo.id === action.payload),
      ];
    },
  },
});

export const todoActions = todoSlice.actions;

export const selectTodo = (state) => state.todos.todos;
export const selectCompleted = (state) => state.todos.completed;

export default todoSlice.reducer;
