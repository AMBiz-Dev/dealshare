import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, SafeAreaView, TextInput, Platform, Button, PixelRatio   } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>Dealshare</Text>
      <StatusBar style="auto" />
      <SafeAreaView style = {[styles.loginMenu, {width: PixelRatio.getPixelSizeForLayoutSize(300), height: PixelRatio.getPixelSizeForLayoutSize(400), marginTop: "10%", padding: 20}]}>
        <Text style = {{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>Sign up</Text>
        <TextInput style = {styles.inputBox} placeholder = "Username"></TextInput> 
        <TextInput style = {styles.inputBox} placeholder = "Email"></TextInput>
        <TextInput style = {styles.inputBox} placeholder = "Password"></TextInput>
        <TextInput style = {styles.inputBox} placeholder = "Re-enter password"></TextInput> 
        <View style = {{width: "70%", height: "20%", alignSelf: "center", paddingTop: "5%"}}>
          <Button title = "Register" color = "red"/>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'flex-top',
  },
  loginMenu: {
    backgroundColor: 'yellow',
    justifyContent: 'flex-top',
    borderRadius: 10
  
  },
  inputBox: {
    borderRadius: 25,
    marginVertical: 10,
    width: "70%",
    height: "10%", 
    borderColor: "black",
    borderWidth: 1, 
    paddingLeft: 10, 
    marginTop: "5%",
    alignSelf: 'center'
  },
});
