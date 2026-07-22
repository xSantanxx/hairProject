import { Text, Button, View, StyleSheet, Animated, Alert, Pressable, TextInput } from "react-native";
import React, {useEffect, useRef, useState} from 'react';

export default function Start(){
    const [text, setText] = useState('');

    return(
        <View style={styles.container}>
        <View style={styles.box}>
                    <TextInput styles={styles.text} placeholder="Name" onChangeText={(newText) => setText(newText)} value={text}></TextInput>
                    </View>
            <View style={styles.box}>
            <Pressable onPress={() => Alert.alert('Heyy')}><Text>Hey</Text></Pressable>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        gap: 20
    },
    box: {
        width: 100,
        height: 25,
        backgroundColor: 'gray',
        borderRadius: 25
    },
    text: {
    }
})

