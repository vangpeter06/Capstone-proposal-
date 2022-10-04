import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Intro from './app/screens/Intro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteScreen from './app/screens/NoteScreen';

export default function App() {

  const [user, setUser] = useState({});
  
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    setUser(JSON.parse(result));
    
  };

  useEffect(() => {
    findUser();
  },[])

  return (
    // <Intro />
    <NoteScreen user={user} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
