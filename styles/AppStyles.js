import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  backgroundCover: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    opacity: 0.7,
    padding: 16
  },
  lightText: {
    color: "#fff"
  },
  header: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 8,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  lightTextInput: {
    borderBottomColor: "#ffffff"
  },
})