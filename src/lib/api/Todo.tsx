import defaultClient from "../client/defaultClient.tsx";
import Todo from "../types/todo.ts";

export const addTodo = async (todo: Todo) => {
    const response = await defaultClient.post('/todo', todo);
    return response.data;
};

export const getTodoList = async () => {
    const response = await defaultClient.get('/todo/list');
    return response.data;
};
