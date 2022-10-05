import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NoteDetail = props => {
  console.log(props.route)
  return (
    <View style={styles.container}>
      <Text>NoteDetail</Text>
    </View>
  )
}

export default NoteDetail

const styles = StyleSheet.create({})