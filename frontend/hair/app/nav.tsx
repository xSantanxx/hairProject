import { Text, Button, View, StyleSheet, Animated, Alert, Pressable } from "react-native";
import React, {useEffect, useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStaticNavigation, StaticParamList } from "@react-navigation/native";

import Index from "./index";
import Start from "./startup";

const Stack = createNativeStackNavigator({
    screens: {
        Home: {
            screen: Index
        },
        Second: {
            screen: Start
        }
    }
});

type RootStackParamList = StaticParamList<typeof Stack>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

const Navigation = createStaticNavigation(Stack);


export default function AppNav(){
    return <Navigation />;
}