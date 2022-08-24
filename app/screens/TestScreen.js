import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Animated,
  TouchableOpacity,
  PanResponder,
} from "react-native";

const TestScreen = () => {
  // const opacity = useState(new Animated.Value(0))[0];

  // const moveBall = () => {
  //   Animated.timing(opacity, {
  //     toValue: 1,
  //     duration: 1000,
  //     useNativeDriver: false,
  //   }).start();
  // };
  // const retriveBall = () => {
  //   Animated.timing(opacity, {
  //     toValue: 0,
  //     duration: 1000,
  //     useNativeDriver: true,
  //   }).start();
  // };

  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (_, gesture) => {
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  )[0];
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
            backgroundColor: "dodgerblue",
          },
        ]}
        {...panResponder.panHandlers}
      />
      {/* <TouchableOpacity onPress={moveBall}>
        <Text>Press To Animated</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={retriveBall}>
        <Text>Original Place</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TestScreen;
