import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import colors from '../misc/colors'
import SearchBar from '../components/SearchBar'
import RoundIconBtn from '../components/RoundIconBtn'
import NoteInputModal from '../components/NoteInputModal'
import AsyncStorage from '@react-native-async-storage/async-storage';

const NoteScreen = ({user}) => {

  const [greet, setGreet] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState([]);

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet('Morning');
    if (hrs === 1 || hrs < 17) return setGreet('Afternoon');
    setGreet('Evening');
  }

  const findNotes = async () => {
    const result = await AsyncStorage.getItem('notes');
    console.log(result);
    if(result !== null) setNotes(JSON.parse(result));
  }

  const handleOnSubmit = async (name, desc) => {
    const note = { id: Date.now(), name, desc, time: Date.now() };
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes)
    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  useEffect (() => {
    findNotes();
    findGreet();
  }, []);

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
          <SearchBar containerStyle={{ marginVertical: 15 }} />
          <View style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
            <Text style={styles.emptyHeading}>Add Notes</Text>
            <RoundIconBtn 
            onPress={() => setModalVisible(true)} 
            antIconName='plus' 
            style={styles.addBtn} />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <SafeAreaView>
       <NoteInputModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
       /> 
      </SafeAreaView>
      
    </>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    zIndex: 1,
  },
  header: {
    FontSize: 25,
    fontWeight: 'bold',
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  emptyHeading: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.2,
  },
  addBtn: {
    position: 'absolute',
    right: 15,
    bottom: 50,
    zIndex: 1,
  }
})