import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useHeaderHeight } from '@react-navigation/elements';
import colors from '../misc/colors';

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

const NoteDetail = props => {
  const { note } = props.route.params;
  const headerHeight = useHeaderHeight();

  
  return (
    <ScrollView contentContainerStyle={[styles.container, {paddingTop: headerHeight}]}>
      <Text style={styles.time}>{`Create At ${formatDate(note.time)}`}</Text>
      <Text style={styles.title}>{note.name}</Text>
      <Text style={styles.desc}>{note.desc}</Text>
      
    </ScrollView>
  )
}

export default NoteDetail

const styles = StyleSheet.create({
  container: {
    // flex:1,
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
  }
})