import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from "react-native";
import SnapCircle from '../components/CirclePreview';


export default function StoriesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image style={styles.image} source={require('../assets/Stories.png')} />
        <SnapCircle style={styles.snapCircle}></SnapCircle>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 5,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    top: 0,
    overflow: "visible",
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },
  snapCircle: {

  }
});
