import { Text, Button, View, StyleSheet, Animated, Alert, Pressable } from "react-native";
import React, {useEffect, useRef} from 'react';
import { useNavigation, createStaticNavigation, NavigationProp } from "@react-navigation/native";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function Index() {

  const navigation = useNavigation();

  const animatedSc = useRef(new Animated.Value(1)).current;

  const bounce = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(Animated.sequence([Animated.timing(bounce, {
      toValue: -30,
      duration: 300,
      useNativeDriver: true,
    }),
    Animated.timing(bounce, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }),
  ])).start();
  }, [bounce]);

  const scaleY = bounce.interpolate({
    inputRange: [-30, 0],
    outputRange: [1.2, 0.8]
  });

  const scaleX = bounce.interpolate({
    inputRange: [-30, 0],
    outputRange: [0.8, 1.2]
  });

  const handlePressI = () => {
    Animated.spring(animatedSc, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  }

  const handlePressO = () => {
    Animated.spring(animatedSc, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true
    }).start();
  }

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, {transform: [{translateY: bounce}, {scaleX: scaleX}, {scaleY: scaleY}]}, ]}>Welcome</Animated.Text>
      {/* <Button title="hey" onPress={() => Alert.alert('you clicked me :)')}></Button> */}
      {/* <AnimatedPressable onPressIn={handlePressI} onPressOut={handlePressO} onPress={() => Alert.alert('you clicked me :)')} style={[styles.button, {transform: [{scale: animatedSc}]}]} ></AnimatedPressable> */}
      <Pressable onPressIn={handlePressI} onPressOut={handlePressO} onPress={() => navigation.navigate('Second')}>
        <Animated.View style={[styles.button, {transform: [{scale: animatedSc}]}]}>
        </Animated.View>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 36,
    fontWeight: '900',
    color: '#9a0ce2',
    letterSpacing: 2,
    textTransform: 'lowercase',
    textShadowColor: '#000000',
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#9a0ce2',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
