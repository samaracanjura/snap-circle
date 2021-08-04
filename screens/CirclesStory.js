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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CirclesStory () {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: '../assets/snap-demo.MP4',
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
//   video: {
//     height: windowHeight,
//     position: "absolute",
//     top: 0,
//     left: 0,
//     alignItems: "stretch",
//     bottom: 0,
//     right: 0,
//   }
});