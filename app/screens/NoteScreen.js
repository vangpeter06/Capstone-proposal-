import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import colors from '../misc/colors'
import SearchBar from '../components/SearchBar'
import RoundIconBtn from '../components/RoundIconBtn'
import NoteInputModal from '../components/NoteInputModal'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Note from '../components/Note'
import { useNotes } from '../contexts/NoteProvider'
import NotFound from '../components/NotFound'

const reverseData = data => {
  return data.sort((a, b) => {
    const aInt = parseInt(a.time);
    const bInt = parseInt(b.time);
    if (aInt < bInt) return 1;
    if (aInt == bInt) return 0;
    if (aInt > bInt) return -1;
  });
};


const NoteScreen = ({user, navigation}) => {

  const [greet, setGreet] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {notes, setNotes, findNotes} = useNotes();
  const [searchQuery, setSearchQuery] = useState('');
  const [resultNotFound, setResultNotFound] = useState(false);

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet('Morning');
    if (hrs === 1 || hrs < 17) return setGreet('Afternoon');
    setGreet('Evening');
  }


  const handleOnSubmit = async (name, desc) => {
    const note = { id: Date.now(), name, desc, time: Date.now() };
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes)
    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  useEffect (() => {
    // findGreet();
    AsyncStorage.clear();
  }, []);

  const reverseNotes = reverseData(notes)

  const openNote = (note => {
    navigation.navigate('NoteDetail', { note });
  })

  const handleOnSearchInput = async (text) => {
    setSearchQuery(text);
    if (!text.trim()) {
      setSearchQuery('');
      setResultNotFound(false);
      return await findNotes();
    }
    const filteredNotes = notes.filter(note => {
      if(note.name.toLowerCase().includes(text.toLowerCase())){
        return note;
      }
    })

    if(filteredNotes.length){
      setNotes([...filteredNotes])
    }else {
      setResultNotFound(true);
    }
  }

  const handleOnClear = async () => {
    setSearchQuery('')
    setResultNotFound(false)
    await findNotes()
  }

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
          {notes.length ? (
            <SearchBar 
            value={searchQuery} 
            onChangeText={handleOnSearchInput}
            containerStyle={{ marginVertical: 15 }} 
            onClear={handleOnClear}
            />
            ) : null}

          {resultNotFound ? <NotFound/> : 
          <FlatList
              data={reverseNotes}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: 15,
              }}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) =>
                <Note onPress={() => openNote(item)} item={item} />
              }
            /> }
          
            {!notes.length ? (
            <View
              style={[
                StyleSheet.absoluteFillObject,
                styles.emptyHeaderContainer,
              ]}
            >
              <Text style={styles.emptyHeader}>Add Notes</Text>
            </View>
          ) : null}
        </SafeAreaView>
      </TouchableWithoutFeedback>
      {/* <SafeAreaView> */}
            <RoundIconBtn 
            onPress={() => setModalVisible(true)} 
            antIconName='plus' 
            style={styles.addBtn} />
       <NoteInputModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
       /> 
      {/* </SafeAreaView> */}
      
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