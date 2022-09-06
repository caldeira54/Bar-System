import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../global/colors';

export default function Header({ title }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 1,
        height: 60,
        padding: 5,
        backgroundColor: colors('cinzaclaro'),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        color: colors('branco')
    },
    header: {
        top: 28,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})