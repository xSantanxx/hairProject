import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image, ScrollView, LayoutAnimation } from "react-native";
import { useRef, useState } from "react";
import { GlassView } from "expo-glass-effect";

export default function MainScreen(){

    const navigation = useRoute();

    const {name, hairType, hairTypeImage} = navigation.params || {};

    const [activeTab, setActiveTab] = useState<string>('porosity');
    const [stretch, setStretch] = useState(false);
    const isRunning = useRef<number | null>(null);

    const startTimer = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setStretch(true);
        if(isRunning.current !== null) {
            clearTimeout(isRunning.current);
        };

        isRunning.current = setTimeout(() => {
            setStretch(false);
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            isRunning.current = null;
        }, 5000);

    }

    return (
        <View style={styles.container}>
            <View style={styles.box}><Text style={styles.text}>{name ?? 'Default Name'}</Text>
            </View>
            <View style={styles.box2}>
                <View style={styles.box3}>
                <Image source={hairTypeImage} style={styles.image} />
                </View>
                <Text style={styles.text}>{hairType}🧑‍🦳</Text>
            </View>
            <View style={styles.box5}>
            <GlassView glassEffectStyle="clear" tintColor="lightblue" style={[styles.glassView, stretch && styles.stretch]}>
                <ScrollView horizontal={true}>
                    <Pressable onPress={() => {setActiveTab('porosity'); startTimer()}} style={[styles.button, activeTab === 'porosity' && styles.buttonAct]}><Text style={styles.text}>Porosity Test🧑‍🦳</Text></Pressable>
                    <Pressable onPress={() => {setActiveTab('scalp'); startTimer()}} style={[styles.button, activeTab === 'scalp' && styles.buttonAct]}><Text style={styles.text}>Scalp Help🧑‍🦳</Text></Pressable>
                    <Pressable onPress={() => {setActiveTab('hairType'); startTimer()}} style={[styles.button, activeTab === 'hairType' && styles.buttonAct]}><Text style={styles.text}>Hair Type🧑‍🦳</Text></Pressable>
                    <Pressable onPress={() => {setActiveTab('care'); startTimer()}} style={[styles.button, activeTab === 'care' && styles.buttonAct]}><Text style={styles.text}>Hair Type🧑‍🦳</Text></Pressable>
                </ScrollView>
                </GlassView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'lightblue',
        padding: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    box: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
    },
    box2: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        top: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        alignSelf: 'center',
        height: '50%',
        width: '100%',
    },
    box3: {
        borderWidth: 2,
        padding: 4,
        borderRadius: 10,
        backgroundColor: 'lightyellow',
        height: '60%',
        width: '50%',
        marginBottom: 10,
    },
    box4: {
        borderWidth: 2,
        padding: 4,
        borderRadius: 10,
        width: '100%',
        marginTop: 10,
        top: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },  
    button: {
        padding: 4,
        borderRadius: 16,
        minHeight: 10,
        marginRight: 5,
        overflow: 'hidden',
    },
    buttonAct: {
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
        padding: 5,
        borderColor: 'white',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    glassView: {
        justifyContent: 'space-between',
        // alignItems: 'center',
        alignSelf: 'center',
        width: '33%',
        padding: 2,
        flexDirection: 'row',
        height: 40,
        borderRadius: 16,
    },
    stretch: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 16,
        height: 50,

    },
    box5: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        zIndex: 1000,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        overflow: 'hidden',
    },
});