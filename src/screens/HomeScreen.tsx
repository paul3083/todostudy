import React, {Suspense} from 'react';
import {SafeAreaView} from "react-native";
import Header from "../components/Header.tsx";
import FillButton from "../components/FillButton.tsx";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootNavigationGraph} from "../navigation/RootNavigation.tsx";
import TodoList from "../components/TodoList.tsx";

interface HomeScreenProps
    extends NativeStackScreenProps<RootNavigationGraph> {
}

const HomeScreen = ({navigation}: HomeScreenProps) => {
    return (
        <SafeAreaView style={{backgroundColor: "#fff", flex: 1, alignItems: "center"}}>
            <Header title={'오늘의 계획'}/>
            <Suspense fallback={null}>
                <TodoList/>
            </Suspense>
            <FillButton enabled={true} title={'계획 추가하기'} onPress={() => navigation.navigate('Add')}/>
        </SafeAreaView>
    );
};


export default HomeScreen;
