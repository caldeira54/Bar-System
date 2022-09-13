import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text ,View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../global/colors.js';

export default function SignIn() {

  const navigation = useNavigation();

  function handleSignIn(){
      navigation.navigate("home");
  }

 return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img/login.png')}
        resizeMode='contain'
        style={{ width: '75%'}}
      />

      <View style={styles.form}>
        <Text style={styles.label}>Usuario:</Text>

        <TextInput
          style={styles.input}
        />

        <Text style={styles.label}>Senha:</Text>   

        <TextInput
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.textButton}>
              Entrar
          </Text>
        </TouchableOpacity>

        </View>
    </View>
  );
 }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6E9987',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
      fontSize: 30,
      color: colors('cinzaclaro'),
      marginBottom: 8
    },
    button: {
      backgroundColor: "#FFF",
      padding: 4,
      height: 40,
      width: '100%',
      textAlign: 'center',
      borderRadius: 12,
      marginTop: 20
    },
    textButton: {
      fontSize: 16,
      padding: 4,
      textTransform: 'uppercase',
      textAlign: 'center'
    },
    form: {
      width: '75%',
      flex: 0.8,
      justifyContent: 'center'
    },
    input: {
      height: 40,
      backgroundColor: colors('cinzaclaro'),
      borderRadius: 12,
      borderBottomWidth: 1,
      color:'#041122',
      padding: 4,
      fontSize: 16,
      marginBottom: 30
    }
  });
