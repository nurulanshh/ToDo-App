import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons'

// Screen
import Todo from "./src/screens/todo";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ToDo" component={Todo} />
        </Tab.Navigator>
    );
}



export default function Container() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MyApp" component={MyTab} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}