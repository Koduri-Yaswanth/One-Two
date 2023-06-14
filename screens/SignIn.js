import React from "react";
import {StyleSheet,Text,View,TextInput,Image,KeyboardAvoidingView,TouchableOpacity,} from "react-native";
import styless from "../screens/styless.js";

import PageColor from "./PageColor.js";

function SignIn({ navigation }) {
  
  return (
     <KeyboardAvoidingView style={styles.inputGroup}>
     
       <View style={styles.img}>
      <Image
        source={require("../assets/images.png")}
        style={{ width: 100, height: 100 }}
      />
    </View>
    <View  style={[styless.card]}>
    <View>
      <Text style={styles.welcome}>Welcome...</Text>
    </View>
    <View style={styless.container}>
        <TextInput
          style={styless.input}
          placeholder="Email Or Number"
          onChangeText={(text) => {}}
        />
      </View>
      <View style={styless.container}>
        <TextInput
          style={styless.input}
          placeholder="Password"
          onChangeText={(text) => {}} 
          secureTextEntry
        />
       <TouchableOpacity onPress={() => navigation.navigate('Forgotpass')}>
         <Text style={{
          textAlign:'right',
          marginTop:"3%",
         }}>Forgot Password ?</Text>
       </TouchableOpacity>
      </View>
      <TouchableOpacity  style = {styles.container1}
      onPress={() => navigation.navigate('Mainscreen')}
     >
        <Text style={styles.signUp}>LogIn</Text>
      </TouchableOpacity>
     
             
       <TouchableOpacity 
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={{
          fontWeight:'bold',
          textAlign:"center",
          margin:'5%'        }}> ==&gt;   SignUp</Text>
       </TouchableOpacity>
      
    <View>
      <Text style={{
        textAlign:'center',
        fontWeight:'bold',
        
      }}>--------OR Continue With--------</Text>
    </View>
    <View style={{
      flexDirection:"row"
    }}>

    <TouchableOpacity  style ={styles.acc1}>
      <Image source={require("../assets/download.png")} style={{height:40,width:40,justifyContent:'center'}} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.acc2}>
       <Image source={require("../assets/downloadface.png")} style={{height:40,width:40, justifyContent:'center'}} />
    </TouchableOpacity>
    </View>
    </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"red"
    },
    
    img: {
      paddingTop: "10%",
      justifyContent: "center",
      alignItems: "center",
    },
    welcome: {
      fontSize: 25,
      textAlign: 'left',      
      margin: "5%",
      fontWeight: 'bold',
    },
    container1: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: "5%",
    },
    signUp: {
      fontSize: 18,
      backgroundColor: "#F8325C",
      marginTop:"1%",
      paddingVertical: "3%",
      paddingHorizontal: "30%",
      borderRadius: 20,
      fontWeight:'bold'
    },
    account: {
      alignItems: "center",
      marginTop: "10%",
      fontSize: 20,
    },
    acc: {
      fontWeight: "bold",
    },
    link: {
          color: "red",
    },
    acc1:{
      
      marginTop:"5%",
      marginLeft:"27%"

    },
    acc2:{
      marginTop:"5%",
      marginLeft:"8%"
    }
});
export default SignIn;