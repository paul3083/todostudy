import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import Header from "../components/Header.tsx";
import FillButton from "../components/FillButton.tsx";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootNavigationGraph} from "../navigation/RootNavigation.tsx";
import Todo from "../components/Todo.tsx";

interface TodoItem {
    id: string;
    title: string;
    isChecked: boolean;
}

interface HomeScreenProps
    extends NativeStackScreenProps<RootNavigationGraph> {}

const HomeScreen = ({navigation}: HomeScreenProps) => {
    const [todos, setTodos] = React.useState<TodoItem[]>([
        {id: '1', title: '공부하기', isChecked: false},
        {id: '2', title: '운동하기', isChecked: false},
    ]);
    const renderItem = ({item}: { item: TodoItem }) => (
        <Todo
            title={item.title}
            isChecked={item.isChecked}
            onPress={() => toggleTodoChecked(item.id)}
        />
    );
    const toggleTodoChecked = (id: string) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? {...todo, isChecked: !todo.isChecked} : todo
            )
        );
    }
    return (
        <SafeAreaView style={{backgroundColor: "#fff", flex: 1, alignItems: "center"}}>
            <Header title={'오늘의 계획'}/>
            <View style={styles.container}>
                <FlatList
                    style={{width: '100%'}}
                    data={todos}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <FillButton enabled={true} title={'계획 추가하기'} onPress={() => navigation.navigate('Add')}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingVertical: 12,
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
    },
});

export default HomeScreen;
