import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TextInput } from 'react-native';
import AppStyles from './styles/AppStyles';
import React from 'react';
import InlineTextButton from './components/InlineTextButton';


export default function App() {
  
  const background = require("./assets/background.jpg");

  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  
  return (
    <ImageBackground style={AppStyles.container} source={background}>
      <View style={AppStyles.backgroundCover}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>Login</Text>
        <TextInput style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText,]}
        placeholder="Email"
        placeholderTextColor={"#BEBEBE"}
        value={email}
        onChangeText={setEmail}
        />
        <TextInput style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText,]}
        placeholder="Password"
        placeholderTextColor={"#BEBEBE"}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        />
        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>Don't have an account? </Text>
          <InlineTextButton
            text="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
         
      

        
      </View>
      
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
