import { Text, Button, View, StyleSheet, Animated, Alert, Pressable, TextInput } from "react-native";
import React, {useEffect, useRef, useState} from 'react';
import { useNavigation, createStaticNavigation, NavigationProp } from "@react-navigation/native";

export default function Start(){
    const [text, setText] = useState('');
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
        <Text style={styles.text}>Please enter your name</Text>
        <View style={styles.box}>
        <TextInput placeholder="John doe" onChangeText={(newText) => setText(newText)} value={text}></TextInput>
        </View>
            <View style={styles.box2}>
            <Pressable onPress={() => navigation.navigate('hairselection', {name: text})}><Text>Continue</Text></Pressable>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    box: {
        width: 100,
        height: 25,
        backgroundColor: 'gray',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
    },
    box2: {
        width: 100,
        height: 25,
        backgroundColor: 'gray',
        borderRadius: 25,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

