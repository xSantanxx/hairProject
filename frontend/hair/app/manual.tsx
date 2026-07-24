import { Text, Button, View, StyleSheet, Animated, Alert, Pressable, TextInput, Image } from "react-native";
import React, {useEffect, useRef, useState} from 'react';
import { useNavigation, createStaticNavigation, NavigationProp } from "@react-navigation/native";

export default function Manual(){
    const [text, setText] = useState('');
    const navigation = useNavigation();
    const [hiddenBoxVisible, setHiddenBoxVisible] = useState(false);

    return(
        <View style={styles.container}>
            {hiddenBoxVisible && (
                <View style={styles.hiddenBox}>
                    <View style={styles.hiddenBoxContainer}>
                        <Pressable id="hairtype1" style={styles.box} onPress={() => Alert.alert('Hair Type 1')}><Image source={require('../assets/images/hairtype1a.png')} style={styles.image}></Image></Pressable>
                        <Pressable id="hairtype2" style={styles.box} onPress={() => Alert.alert('Hair Type 2')}><Image source={require('../assets/images/hairtype2a.png')} style={styles.image}></Image></Pressable>
                        <Pressable id="hairtype3" style={styles.box} onPress={() => Alert.alert('Hair Type 3')}><Image source={require('../assets/images/hairtype3a.png')} style={styles.image}></Image></Pressable>
                    </View>
                </View>
            )}
            <View style={styles.boxContainer}>
                <Pressable style={styles.box} onPress={() => setHiddenBoxVisible(!hiddenBoxVisible)}><Image source={require('../assets/images/hairtype1a.png')} style={styles.image}></Image>
                <Text style={styles.text}>Hair Type 1</Text></Pressable>
                <Pressable id="hairtype2" style={styles.box} onPress={() => Alert.alert('Hair Type 2')}><Image source={require('../assets/images/hairtype2a.png')} style={styles.image}></Image>
                <Text style={styles.text}>Hair Type 2</Text></Pressable>
                <Pressable id="hairtype3" style={styles.box} onPress={() => Alert.alert('Hair Type 3')}><Image source={require('../assets/images/hairtype3a.png')} style={styles.image}></Image>
                <Text style={styles.text}>Hair Type 3</Text></Pressable>
                <Pressable id="hairtype4" style={styles.box} onPress={() => Alert.alert('Hair Type 4')}><Image source={require('../assets/images/hairtype4a.png')} style={styles.image}></Image>
                <Text style={styles.text}>Hair Type 4</Text></Pressable>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'beige',
        padding: 5,
    },
    boxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 20,
        alignItems: 'center',
    },
    hiddenBoxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 20,
        alignItems: 'center',
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 120,
        flex: 1,
        marginBottom: 10,
        minWidth: '30%',
        
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    hiddenBox: {
        backgroundColor: 'red',
        width: '65%',
        height: '50%',
        position: 'absolute',
        top: 50,
        zIndex: 1000,
    },
})

