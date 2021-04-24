import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Navigation from "./src/Navigation"

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Navigation />
    );
}
