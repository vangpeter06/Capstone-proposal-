import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../misc/colors'
import {AntDesign} from '@expo/vector-icons'

const SearchBar = ({ containerStyle, value, onChangeText, onClear }) => {
  return (
    <View style={[styles.container, {...containerStyle}]}>
      <TextInput 
      style={styles.searchBar} 
      placeholder="Search Here ..."
      value={value}
      onChangeText={onChangeText}
      />
      {value ? 
      (<AntDesign name="close" 
      size={20} 
      colors={colors.PRIMARY} 
      onPress={onClear} 
      style={styles.clearIcon}
      /> 
      ) : null}
    </View>
  )
}

export default SearchBar

const width = Dimensions.get('window').width - 50;

const styles = StyleSheet.create({
  searchBar: {
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
    justifyContent: 'center',
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
  },
})