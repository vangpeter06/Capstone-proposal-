import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { useHeaderHeight } from '@react-navigation/elements';

const NoteDetail = props => {
  const { note } = props.route.params;
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={[styles.container, {paddingTop: headerHeight}]}>
      <Text>{note.name}</Text>
      <Text>{note.desc}</Text>
    </SafeAreaView>
  )
}

export default NoteDetail

const styles = StyleSheet.create({
  container: {
    
  } 
})