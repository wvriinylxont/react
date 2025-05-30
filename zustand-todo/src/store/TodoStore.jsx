import { create } from "zustand";

// currentTodo는 처음에 null, 할일을 1개라도 읽고나면 그 할일이 저장되어 있다(마지막 읽은 할일일)
const useTodoStore = create(set => ({
  todos: [],
  correntTodo: null,
  setTodos: (params) => set(state => ({ ...state, todos: params })),
  setCurrentTodo: params=> set(state => ({ ...state, currentTodo:params }))
}));

export default useTodoStore;
