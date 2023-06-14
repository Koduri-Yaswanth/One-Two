import React from 'react'
import { Text, SafeAreaView , StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function Mainscreen  ()  {
  return (
    <SafeAreaView style={{
      
      justifyContent: 'center',
      alignItems:"center",
      height:"100%"
      
    }} >
        <Text style={styles.main} >welcome to home screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   
    main:{
      
      textAlign:"center",
     
      
      
    }
})

export default Mainscreen