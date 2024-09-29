import React from 'react';
import RootNavigation from "./src/navigation/RootNavigation.tsx";
import {NavigationContainer} from "@react-navigation/native";

const App = () => {
    return (
        <NavigationContainer>
            <RootNavigation/>
        </NavigationContainer>
    );
};

export default App;
