import { Text, Button, View, StyleSheet, Animated, Alert, Pressable, TextInput } from "react-native";
import React, {useEffect, useRef, useState} from 'react';
import { useNavigation, createStaticNavigation, NavigationProp, useRoute } from "@react-navigation/native";

export default function Hair(){
    const [text, setText] = useState('');
    const navigation = useRoute();

    const {name} = navigation.params || {};

    return(
        <View style={styles.container}>
        <View style={styles.box}><Text style={styles.text}>{name}</Text></View>
        <View style={styles.box2}>
        <View style={styles.box3}><Text></Text></View>
        <View style={styles.box4}><Text></Text></View></View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blue',
        flex: 1
    },
    box: {
        width: 100,
        height: 25,
        backgroundColor: 'gray',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    text: {
        fontWeight: 'bold',
    },
    box2: {
        width: 300,
        height: 200,
        marginTop: 20,
        position: 'absolute',
        top: 250,
        left: 70,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-starts',
        flexDirection: 'row',
    },
    box3: {
        backgroundColor: 'red',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        flex: 1
    },
    box4: {
        backgroundColor: 'green',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        flex: 1
    }
})

