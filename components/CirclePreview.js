import { AutoFocus } from 'expo-camera/build/Camera.types';
import React from 'react';
import {
    Image,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { StyleSheet } from "react-native";
import { Circle } from 'react-native-maps';
import storiesData from './StoriesData';

const SnapCircle = () => {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            {storiesData.map((item, index) => (
                <View style={styles.circles}>
                    <View style={styles.imageView}>
                    <Image source={item.image} style={styles.image}/>
                    </View>
                    <Text>{item.name}</Text>
                    <Text>{item.title}</Text>
                    <Text>{item.company}</Text>
                </View>
            ))}
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        flex: 1,
        flexWrap: 'wrap',
        marginHorizontal: 20,
      },
    circles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    imageView: {
        flex: 1,
        backgroundColor: '#fffc00',
        borderRadius: 60,
        width: 120,
    },
    image: {
        flex: 1,
        width: 120,
        height: 120,
        resizeMode: 'contain',
    }
});

export default SnapCircle;