import React, { useRef } from 'react';
import { Animated, View, Text, Button, Easing } from 'react-native';

const TimingEasingAnimation = () => {
  const translateYAnim = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(translateYAnim, {
      toValue: 200,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.ease, // Apply easing function (e.g., ease, linear, easeInOut)
      useNativeDriver: true,
    }).start();
  };

  const resetAnimation = () => {
    Animated.timing(translateYAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={{
          transform: [{ translateY: translateYAnim }],
        }}>
        <Text style={{ fontSize: 24 }}>Hello, React Native!</Text>
      </Animated.View>
      <View style={{ marginTop: 20 }}>
        <Button title="Start Animation" onPress={startAnimation} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="Reset Animation" onPress={resetAnimation} />
      </View>
    </View>
  );
};

export default TimingEasingAnimation;
