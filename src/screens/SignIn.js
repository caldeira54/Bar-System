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
      

      <View style={styles.form}>
        <Image
          source={require('../assets/img/sinuca.png')}
          resizeMode='contain'
          style={{ width: '75%', height: '30%', marginLeft: '13%' }}
          
        />
        
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
      backgroundColor: colors('verdeescuro'),
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
      textAlign: 'center',
      color: colors('branco')
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
