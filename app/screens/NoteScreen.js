import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import colors from '../misc/colors'
import SearchBar from '../components/SearchBar'
import RoundIconBtn from '../components/RoundIconBtn'
import NoteInputModal from '../components/NoteInputModal'

const NoteScreen = ({user}) => {

  const [greet, setGreet] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet('Morning');
    if (hrs === 1 || hrs < 17) return setGreet('Afternoon');
    setGreet('Evening');
  }

  useEffect (() => {
    findGreet();
  }, []);

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT} />
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
      <SafeAreaView>
       <NoteInputModal visible={modalVisible} onClose={() => setModalVisible(false)} /> 
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