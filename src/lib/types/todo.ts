export interface Todo {
    id?: string;
    title: string;
    content: string;
}

export interface CreateTodoRequest {
    title: string;
    content: string;
}
