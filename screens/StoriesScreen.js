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
  TouchableOpacity,
} from "react-native";
import SnapCircle from '../components/CirclePreview';
import Colors from '../constants/Colors';


export default function StoriesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.screenshotView}>
            <Image style={styles.screenshot} source={require('../assets/Stories.png')} />
        </View>
        <View style={styles.Row}>
            <TouchableOpacity
              style={[styles.circle, styles.circleButton]}>
              <Text style={styles.circleText}>Snap Circle</Text>
            </TouchableOpacity>
        </View>
        <SnapCircle navigation={navigation} style={styles.snapCircle}></SnapCircle>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexDirection: "column",
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
  },
  snapCircle: {
    zIndex: 0,
  },
  circle: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  circleButton: {
    backgroundColor: Colors.snapyellow,
  },
  circleText: {
    color: "black",
    fontWeight: "bold",
  },
  screenshot: {
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    width: '100%',
    height: 400,
  },
});
