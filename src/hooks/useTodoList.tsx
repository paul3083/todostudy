import {getTodoList} from "../lib/api/Todo.tsx";
import {useSuspenseQuery} from "@tanstack/react-query";

const useTodoList = () => {
    const {data: todoList, refetch} = useSuspenseQuery({
        queryKey: ['todoList'],
        queryFn: () => getTodoList(),
    });
    return {todoList, refetch};
};

export default useTodoList;
