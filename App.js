import React from 'react';
import { View, StyleSheet, TextInput, Alert, TouchableOpacity, Text, Image } from "react-native";
import Logo from './assets/logo.png'

const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.logoText}>React Native</Text>
      </View>
      <TextInput style={styles.input} placeholder='User Name' />
      <TextInput style={styles.input} placeholder='Password' />
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Login Successfully")}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: "#1F1E30",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#ffffff20",
    borderRadius: 10,
    color: "#fff",
    paddingHorizontal: 15,
    marginVertical: 12
  },

  logoBox: {
    width: 120,
    height: 100,
    marginVertical: 50
    // backgroundColor: '#fff',
    // borderRadius: 8,
  },

  logo: {
    width: "100%",
    height: "100%",
  },

  logoText: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    marginVertical: 5
  },

  button: {
    backgroundColor: "#D83256",
    color: "#fff",
    width: '100%',
    paddingVertical: 13,
    paddingHorizontal: 5,
    borderRadius: 50,
    marginVertical: 12
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: 15
  }

});

export default App;
