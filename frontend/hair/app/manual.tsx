import { Text, Button, View, StyleSheet, Animated, Alert, Pressable, TextInput, Image } from "react-native";
import React, {useEffect, useRef, useState} from 'react';
import { useNavigation, createStaticNavigation, NavigationProp, useRoute } from "@react-navigation/native";

export default function Manual(){
    const [text, setText] = useState('');
    const navigation = useNavigation();
    const [hiddenBoxVisible, setHiddenBoxVisible] = useState(false);
    const [selectedHairType, setSelectedHairType] = useState('');
    const [selectedHairActualType, setSelectedHairActualType] = useState('');
    const [hairTypeTextVisible, setHairTypeTextVisible] = useState(false);
    const preventRun = useRef(false);
    const [selectedHairTypeImage, setSelectedHairTypeImage] = useState('');

    const images = [{
        id: 1,
        hairType: '1',
        image: require('../assets/images/hairtype1a.png'),
        text: 'Hair Type 1a',
    }, {
        id: 2,
        hairType: '1',
        image: require('../assets/images/hairtype1b.png'),
        text: 'Hair Type 1b',
    }, {
        id: 3,
        hairType: '1',
        image: require('../assets/images/hairtype1c.png'),
        text: 'Hair Type 1c',
    }, {
        id: 4,
        hairType: '2',
        image: require('../assets/images/hairtype2a.png'),
        text: 'Hair Type 2a',
    }, {
        id: 5,
        hairType: '2',
        image: require('../assets/images/hairtype2b.png'),
        text: 'Hair Type 2b',
    }, {
        id: 6,
        hairType: '2',
        image: require('../assets/images/hairtype2c.png'),
        text: 'Hair Type 2c',
    }, {
        id: 7,
        hairType: '3',
        image: require('../assets/images/hairtype3a.png'),
        text: 'Hair Type 3a',
    }, {
        id: 8,
        hairType: '3',
        image: require('../assets/images/hairtype3b.png'),
        text: 'Hair Type 3b',
    }, {
        id: 9,
        hairType: '3',
        image: require('../assets/images/hairtype3c.png'),
        text: 'Hair Type 3c',
    }, {
        id: 10,
        hairType: '4',
        image: require('../assets/images/hairtype4a.png'),
        text: 'Hair Type 4a',
    }, {
        id: 11,
        hairType: '4',
        image: require('../assets/images/hairtype4b.png'),
        text: 'Hair Type 4b',
    }, {
        id: 12,
        hairType: '4',
        image: require('../assets/images/hairtype4c.png'),
        text: 'Hair Type 4c',
    }];

    const filteredImages = images.filter((item) => item.hairType === selectedHairType);

    const {name} = navigation.params || {};

    const navigation2 = useNavigation();

    useEffect(() => {
        if (preventRun.current){
            navigation2.navigate('mainscreen', {name: name, hairType: selectedHairActualType, hairTypeImage: selectedHairTypeImage});
        }
        preventRun.current = true;
    }, [selectedHairActualType]);

    return(
        <View style={styles.container}>
            {selectedHairActualType && (
            <View style={styles.textContainer}><Text style={styles.text}>{selectedHairActualType} ❤️</Text>
            <Pressable style={styles.textContainer2} onPress={() => {setHairTypeTextVisible(false); setSelectedHairActualType('');}}><Text style={styles.text}>X</Text></Pressable>
            </View>
            )}
            {hiddenBoxVisible && (
                <Pressable style={styles.hiddenBox} onPress={() => setHiddenBoxVisible(false)}>
                    <View style={styles.hiddenBoxContainer}>
                        {filteredImages.map((item) => (
                            <Pressable
                                key={item.id}
                                style={styles.box}
                                onPress={() => {setSelectedHairActualType(item.text); Alert.alert(item.text); setHiddenBoxVisible(false); setHairTypeTextVisible(true); setSelectedHairTypeImage(item.image);}}
                            >
                                <Image source={item.image} style={styles.image} />
                                <Text style={styles.text}>{item.text}</Text>
                            </Pressable>
                        ))}
                    </View>
                </Pressable>
            )}
            <View style={styles.boxContainer}>
                <Pressable style={styles.box} onPress={() => {setSelectedHairType('1'); setHiddenBoxVisible(true);}}><Image source={require('../assets/images/hairtype1a.png')} style={styles.image}></Image>
                <Text style={styles.text}>Hair Type 1</Text></Pressable>
                <Pressable id="hairtype2" style={styles.box} onPress={() => {setSelectedHairType('2'); setHiddenBoxVisible(true);}}><Image source={require('../assets/images/hairtype2a.png')} style={styles.image}></Image>
                <Text style={styles.text}>Hair Type 2</Text></Pressable>
                <Pressable id="hairtype3" style={styles.box} onPress={() => {setSelectedHairType('3'); setHiddenBoxVisible(true);}}><Image source={require('../assets/images/hairtype3a.png')} style={styles.image}></Image>
                <Text style={styles.text}>Hair Type 3</Text></Pressable>
                <Pressable id="hairtype4" style={styles.box} onPress={() => {setSelectedHairType('4'); setHiddenBoxVisible(true);}}><Image source={require('../assets/images/hairtype4a.png')} style={styles.image}></Image>
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
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        minHeight: 20,
        minWidth: '30%',
        position: 'absolute',
        top: 50,
        marginLeft: 3,
        left: 0,
        borderWidth: 1,
        borderColor: 'black',
    }, 
    textContainer2: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        minHeight: 20,
        minWidth: '30%',
        position: 'absolute',
        top: 30,
        marginLeft: 1,
        left: 0,
        borderWidth: 1,
        borderColor: 'black',
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
        backgroundColor: 'gray',
        width: '65%',
        height: '50%',
        position: 'absolute',
        top: 50,
        zIndex: 1000,
        padding: 20,
    },
})

