import { Modal, SafeAreaView, StyleSheet, Text, TextInput, View, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../misc/colors'
import RoundIconBtn from './RoundIconBtn';


const NoteInputModal = ({ visible, onClose, onSubmit, note, isEdit}) => {

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleModalClose = () => {
    Keyboard.dismiss();
  }

  useEffect(() => {
    if (isEdit) {
      setName(note.name);
      setDesc(note.desc);
    }
  }, [isEdit]);

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'name') setName(text);
    if (valueFor === 'desc') setDesc(text);
  }

  const handleSubmit = () => {
    if (!name.trim() && !desc.trim()) return onClose();
    
    if (isEdit) {
      // for edit
      onSubmit(name, desc, Date.now());
    } else {
      onSubmit(title, desc);
      setTitle('');
      setDesc('');
    }
    onClose();

  }

  const closeModal = () => {
    if (!isEdit) {
      setTitle('');
      setDesc('');
    }
    onClose();
  };

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
       {/* {name.trim() || desc.trim() ? ( */}
       <RoundIconBtn 
       antIconName='close'
       size={25}
       style={{ marginLeft: 25}}
       onPress={closeModal}
       />
       {/* ) : null} */}
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