import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
      
      // <StatusBar style="auto" />
   
  );
}
