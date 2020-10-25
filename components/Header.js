import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.HeaderBox}>
            <Text style={styles.HeaderText}>Phone</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    HeaderBox: {
        width: "auto",
        height: 100,
        backgroundColor: "#4FA631",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    HeaderText: {
        fontSize: 30,
        color: "white",
        marginLeft: 50
    }
});

export default Header;