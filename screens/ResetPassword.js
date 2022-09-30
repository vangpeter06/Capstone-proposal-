import {
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AppStyles from "../styles/AppStyles";
import React from "react";
import InlineTextButton from "../components/InlineTextButton";

export default function ResetPassword({ navigation }) {
  const background = require("../assets/background.jpg");

  let [email, setEmail] = React.useState("");

  return (
    <ImageBackground style={AppStyles.container} source={background}>
      <KeyboardAvoidingView
        style={AppStyles.backgroundCover}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={90}
      >
        <Text style={[AppStyles.lightText, AppStyles.header]}>Reset Password</Text>
        <TextInput
          style={[
            AppStyles.textInput,
            AppStyles.lightTextInput,
            AppStyles.lightText,
          ]}
          placeholder="Email"
          placeholderTextColor={"#BEBEBE"}
          value={email}
          onChangeText={setEmail}
        />
        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>Don't have an account? </Text>
          <InlineTextButton
            text="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>

        <Button title="Reset Password" color="#f7b267" />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
