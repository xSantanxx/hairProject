import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from "react-native";



export default function MainScreen(){

    const navigation = useRoute();

    const {name, hairType, hairTypeImage} = navigation.params || {};

    return (
        <View style={styles.container}>
            <View style={styles.box}><Text style={styles.text}>{name ?? 'Default Name'}</Text>
            </View>
            
            <View style={styles.box2}>
                <View style={styles.box3}>
                <Image source={hairTypeImage} style={styles.image} />
                </View>
                <Text style={styles.text}>{hairType}🧑‍🦳</Text>
                <View style={styles.box4}>
                <ScrollView horizontal={true}>
                    <Pressable style={styles.button}><Text style={styles.text}>Porosity Test🧑‍🦳</Text></Pressable>
                    <Pressable style={styles.button}><Text style={styles.text}>Scalp Help🧑‍🦳</Text></Pressable>
                    <Pressable style={styles.button}><Text style={styles.text}>Hair Type🧑‍🦳</Text></Pressable>
                    <Pressable style={styles.button}><Text style={styles.text}>Hair Type🧑‍🦳</Text></Pressable>
                </ScrollView>
                </View>
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
        backgroundColor: 'lightyellow',
        width: '100%',
        marginTop: 10,
        top: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },  
    button: {
        borderWidth: 2,
        padding: 4,
        borderRadius: 10,
        backgroundColor: 'lightyellow',
        minHeight: 10,
        marginRight: 5,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
});