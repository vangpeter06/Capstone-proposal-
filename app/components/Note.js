import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Note = ({item}) => {
  const { name, desc } = item;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{desc}</Text>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({})