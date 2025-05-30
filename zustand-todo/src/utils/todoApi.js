// api 통신하는 함수들

import api from "./api";

export const readAll = () => api.get("/todos");

export const read = (tno) => api.get(`/todos/${tno}`);

// 서버 JSON으로 전달 -> @RequestBody Todo todo
export const write = (object) => api.post("/todos/new", object);

// 서버에 urlencoded로 전달 -> @ModelAttribute Todo todo
export const create2 = (object) => api.post("todos/new2", new URLSearchParams(object));
