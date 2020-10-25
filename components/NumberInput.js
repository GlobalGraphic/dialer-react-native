import React, { useState } from 'react';
import { View,StyleSheet, TextInput } from 'react-native';

const NumberInput = (props) => {
    return (
        <View style={styles.InputBox}>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            value={props.value}
            onChangeText={props.onChangeText}
            secureTextEntry={false}
            placeholder="*"
            placeholderTextColor="black"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    InputBox: {
        width: "auto",
        height: 100,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "100%",
        margin: 15,
        borderColor: 'black',
        height: 51,
        width: "auto",
        fontSize: 50,
        fontWeight: "bold"
    },
});

export default NumberInput;