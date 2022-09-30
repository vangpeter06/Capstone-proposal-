import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TextInput } from 'react-native';
import AppStyles from './styles/AppStyles';

export default function App() {
  
  const background = require("./assets/background.jpg");
  
  return (
    <ImageBackground style={AppStyles.container} source={background}>
      <View style={AppStyles.backgroundCover}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>Login</Text>
        <TextInput style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText,]}
        placeholder="Email"
        placeholderTextColor={"#BEBEBE"}
        />
        <TextInput style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText,]}
        placeholder="Password"
        placeholderTextColor={"#BEBEBE"}
        />

        
      </View>
      
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
