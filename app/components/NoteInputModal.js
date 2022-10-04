import { Modal, SafeAreaView, StyleSheet, Text, TextInput, View, StatusBar, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import colors from '../misc/colors'


const NoteInputModal = ({visible}) => {

  const 

  return (
    <>
      <StatusBar hidden />
      <Modal visible={visible} animationType='fade'>
      <SafeAreaView styles={styles.container}>
        <TextInput 
        style={[styles.input, styles.title]} 
        placeholder="Name"
        />
        <TextInput 
        style={[styles.input, styles.desc]} 
        placeholder="Notes"
        multiline
        />
       
        
      </SafeAreaView>
      <TouchableWithoutFeedback onPress={handleModalClose}>
        <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
      </TouchableWithoutFeedback>
      </Modal>
    </>
  )
}

export default NoteInputModal

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.PRIMARY,
    fontSize: 20,
    color: colors.DARK,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  desc: {
    height: 150,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
})