import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import AppStyles from './styles/AppStyles';
import React from 'react';
import InlineTextButton from './components/InlineTextButton';


export default function App() {
  
  const background = require("./assets/background.jpg");

  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  
  return (
    <ImageBackground style={AppStyles.container} source={background}>
      <KeyboardAvoidingView 
        style={AppStyles.backgroundCover}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={90} >
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
        <View style={[AppStyles.rowContainer, AppStyles.bottomMargin]}>
          <Text style={AppStyles.lightText}>Forgotten your password? </Text>
          <InlineTextButton
            text="Reset"
            onPress={() => navigation.navigate("ResetPassword")}
          />
        </View>
      

        <Button title="Login" color="#f7b267" />  
      </KeyboardAvoidingView>
      
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
