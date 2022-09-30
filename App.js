import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground } from 'react-native';
import AppStyles from './styles/AppStyles';

export default function App() {
  
  const background = require("./assets/background.jpg");
  
  return (
    <ImageBackground style={AppStyles.container} source={background}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
