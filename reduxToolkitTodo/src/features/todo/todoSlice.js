import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World!"}]
}

// function sayHello() {
//     console.log("Hello World!");
// }

export const todoSlice = createSlice({
    name: 'todo',
    initialState,           // declared-above!
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)          //declared above!
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.
            id !== action.payload )
        }, 
        updateTodo: (state, action) => {
            const { id, payload } = action.payload;
            state.todos = state.todos.map((todo) => todo.id === id ? payload : todo ) 
            // Update-Todo : Assignment Task!
            // state.todos.action.payload
        }           

    } 
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer