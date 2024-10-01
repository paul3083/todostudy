import defaultClient from "../client/defaultClient.tsx";
import {CreateTodoRequest, Todo} from "../types/todo.ts";

export const addTodo = async (todo: CreateTodoRequest) => {
    const response = await defaultClient.post('/todo', todo);
    return response.data;
};

export const getTodoList = async () => {
    const response = await defaultClient.get<Todo[]>('/todo/list');
    return response.data;
};
