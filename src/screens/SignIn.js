import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text ,View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function SignIn() {
 return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img/login.png')}
        resizeMode='contain'
        style={{ width: '75%'}}
      />
    </View>
  );
 }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6E9987',
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
