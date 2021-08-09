import React, { Component, Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image,
  Button,
} from "react-native";
import styled from "styled-components/native";
import { Video, AVPlaybackStatus } from 'expo-av';
import GestureRecognizer, {swipeDirections} from "react-native-swipe-gestures";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function CirclesStory ({ navigation }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
      <GestureRecognizer
      onSwipeDown={() => navigation.goBack()} style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={require("../assets/mentor-video.mov")}
          shouldPlay  // video will automatically play
          useNativeControls
          resizeMode="contain"
          isLooping={true}
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          {/* <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          /> */}
        </View>
      </GestureRecognizer>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  video: {
    height: windowHeight,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
    padding: 20,
    borderRadius: 10,
   
  },
  buttons: {
    top: 200,
  },
});