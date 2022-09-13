import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../global/colors';
import { ArrowFatLinesRight, ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Header({ title, backButton = true }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {backButton ? (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeft size={30} color={colors('white')} />
                    </TouchableOpacity>
                ) : <View/>}
                    <Text style={styles.title}>{title}</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowFatLinesRight size={30} color={colors('verdeclaro')} />
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
        height: 80,
        padding: 5, 
    },
    title: {
        fontSize: 25,
        color: colors('branco')
    },
    header: {
        top: 28,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});