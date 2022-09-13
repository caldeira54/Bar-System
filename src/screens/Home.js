import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import colors from '../global/colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header title="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colors('verdeclaro')
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