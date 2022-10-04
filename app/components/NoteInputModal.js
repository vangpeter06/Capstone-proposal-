import { Modal, SafeAreaView, StyleSheet, Text, TextInput, View, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import colors from '../misc/colors'
import RoundIconBtn from './RoundIconBtn';


const NoteInputModal = ({ visible, onClose}) => {

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleModalClose = () => {
    Keyboard.dismiss();
  }

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'name') setName(text);
    if (valueFor === 'desc') setDesc(text);
  }

  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) return onClose();
  }

  return (
    <>
      <StatusBar hidden />
      <Modal visible={visible} animationType='fade'>
      <SafeAreaView styles={styles.container}>
        <TextInput 
        style={[styles.input, styles.title]} 
        placeholder="Name"
        onChangeText={text => handleOnChangeText(text, 'name')}
        value={name}
        />
        <TextInput 
        style={[styles.input, styles.desc]} 
        placeholder="Notes"
        multiline
        onChangeText={text => handleOnChangeText(text, 'desc')}
        value={desc}
        />
        <View style={styles.btnContainer}>
       <RoundIconBtn 
       antIconName='check'
       size={25} 
       onPress={handleSubmit}
       />
       <RoundIconBtn 
       antIconName='close'
       size={25}
       style={{ marginLeft: 25}}
       />

        </View>
        
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
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  },
})