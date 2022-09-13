import React from 'react';
import { TextInput } from 'react-native';
import colors from '../global/colors';

export default function Input({placeholder, security=false, keyboardType, autoCorrect=false, returnKeyType="next"}) {
 return (
    <TextInput
        placeholder = {placeholder}
        placeholderTextColor= {colors('white')}
        secureTextEntry={security}
        autoCorrect = {autoCorrect}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
    input:{
        height: 40,
        borderBottomWidth: 1,
        borderColor: colors('verdeescuro'),
        color:  colors('branco'),
        fontSize: 16
    }
});