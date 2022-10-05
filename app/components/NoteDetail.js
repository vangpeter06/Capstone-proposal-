import { StyleSheet, Text, View, ScrollView, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import { useHeaderHeight } from '@react-navigation/elements';
import colors from '../misc/colors';
import RoundIconBtn from './RoundIconBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotes } from '../contexts/NoteProvider';
import NoteInputModal from './NoteInputModal';

const formatDate = (ms) => {
  const date = new Date(ms);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${month}/${day}/${year} - ${hrs}:${min}:${sec}`;
}
      
const NoteDetail = (props) => {
  const [note, setNote] = useState(props.route.params.note)
  const headerHeight = useHeaderHeight();
  const {setNotes} = useNotes();
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const deleteNote = async () => {
    const result = await AsyncStorage.getItem('notes');
    let notes = [];
    if (result !== null) notes = JSON.parse(result);

    const newNotes = notes.filter(n => n.id !== note.id);
    setNotes(newNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    props.navigation.goBack();
  };

  const displayDeleteAlert = () => {
    Alert.alert(
      'Are You Sure!',
      'This action will delete your information permanently!',
      [
        {
          text: 'Delete',
          onPress: deleteNote,
        },
        {
          text: 'No Thanks',
          onPress: () => console.log('no thanks'),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const handleUpdate = async ( name, desc, time ) => {
    const result = await AsyncStorage.getItem('notes')
    let notes = [];
    if(result !== null) notes = JSON.parse(result)

    const newNotes = notes.filter(n => {
      if(n.id === note.id){
        n.name = name
        n.desc = desc
        n.isUpdated = true
        n.time = time

        setNote(n)
      }
      return n;
    })

    setNotes(newNotes);
    await AsyncStorage.setItem('note', JSON.stringify(newNotes))
  }

  const handleOnClose = () => setShowModal(false);

  const openEditModal = () => {
    setIsEdit(true)
    setShowModal(true)
  }
  
  return (
    <>
    <ScrollView contentContainerStyle={[styles.container, {paddingTop: headerHeight}]}>
      <Text style={styles.time}>{note.isUpdated 
      ? `Updated At ${formatDate(note.time)}`
      : `Create At ${formatDate(note.time)}`}</Text>
      <Text style={styles.title}>{note.name}</Text>
      <Text style={styles.desc}>{note.desc}</Text>
      
    </ScrollView>
      <View style={styles.btnContainer}>
        <RoundIconBtn 
        antIconName='delete' 
        style={{backgroundColor: colors.ERROR, marginBottom: 20 }} 
        onPress={displayDeleteAlert}
        />
        <RoundIconBtn antIconName='edit'
        onPress={openEditModal} />
      </View>
      <NoteInputModal
        onClose={handleOnClose}
        onSubmit={handleUpdate}
        visible={showModal}
        isEdit={isEdit}
        note={note}
      />
      </>
  )
}

export default NoteDetail

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 15,

  },
  title: {
    fontSize: 30,
    color: colors.PRIMARY,
    fontWeight: 'bold',
  },
  desc: {
    frontSize: 20,
    opacity: 0.5, 
  }, 
  time: {
    textAlign: 'right',
    fontSize: 12,
    opacity: 0.5,
  },
  btnContainer: {
    position: 'absolute',
    right: 15,
    bottom: 50,
  },
})