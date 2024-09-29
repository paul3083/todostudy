import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen.tsx";
import AddScreen from "../screens/AddScreen.tsx";

export type RootNavigationGraph = {
    Home: undefined,
    Add: undefined,
}

const Stack = createNativeStackNavigator<RootNavigationGraph>();

const RootNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Add" component={AddScreen}/>
        </Stack.Navigator>
    );
};

export default RootNavigation;
