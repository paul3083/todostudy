import React from 'react';
import Todo from "./Todo.tsx";
import {FlatList, RefreshControl} from "react-native";
import useTodoList from "../hooks/useTodoList.tsx";

const TodoList = () => {
    const {todoList, refetch} = useTodoList();
    const [isRefreshing, setIsRefreshing] = React.useState(false);
    return (
        <FlatList
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={() => {
                setIsRefreshing(true);
                refetch().then(() => setIsRefreshing(false));
            }}/>}
            style={{width: '100%'}}
            data={todoList}
            renderItem={({item}) => (
                <Todo
                    title={item.title}
                />
            )}
        />
    );
};

export default TodoList;
