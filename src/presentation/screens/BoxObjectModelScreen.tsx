import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>

            {/* <Text style={styles.title}>BoxObjectModelScreen</Text> */}

            <View style={styles.purpleBox}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        fontSize: 30,
        borderWidth: 10,
        padding: 10,
    },
    purpleBox: {
        // flex: 1,
        backgroundColor: 'purple',
        height: 30,
        margin: 20,
    },
})