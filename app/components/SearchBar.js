import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../misc/colors'

const SearchBar = ({containerStyle}) => {
  return (
    <View style={[styles.container, {...containerStyle}]}>
      <TextInput 
      style={styles.serachBar} 
      placeholder="Search Here ..."
      />
    </View>
  )
}

export default SearchBar

const width = Dimensions.get('window').width - 50;

const styles = StyleSheet.create({
  serachBar: {
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    height: 40,
    width,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
  },
  container: {
    paddingHorizontal: 20,
  }
})