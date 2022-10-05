import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const NotFound = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="frown" size={90 } color='black' />
      <Text style={{ marginTop: 20, fontSize: 20 }}>Result Not Found</Text>
    </View>
  )
}

export default NotFound

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
    zIndex: -1,
  },
})