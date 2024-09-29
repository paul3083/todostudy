import {useQuery} from "react-query";
import {getTodoList} from "../lib/api/Todo.tsx";

const useTodoList = () => {
    const {data: todoList, refetch} = useQuery({
        queryKey: ['todoList'],
        queryFn: () => getTodoList(),
    });
    return {todoList, refetch};
};

export default useTodoList;
