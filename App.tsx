import React from 'react';
import RootNavigation from "./src/navigation/RootNavigation.tsx";
import {NavigationContainer} from "@react-navigation/native";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <RootNavigation/>
            </NavigationContainer>
        </QueryClientProvider>
    );
};

export default App;
