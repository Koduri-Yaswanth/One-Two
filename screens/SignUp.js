import React from "react";
import {Text,View,StyleSheet,TextInput, SafeAreaView,Image, card ,KeyboardAvoidingView, TouchableOpacity} from "react-native";
import styless from "./styless";


function SignUp({ navigation }) {
    
    return(
        <KeyboardAvoidingView 
        style = {stylesSignUp.inputGroup}
        behavior="padding" >
           <View style={{
              
              marginTop:"5%"
           }}>
                <Image source={require("../assets/images.png")} 
                style={{ height:100,width:100}}
                />
            </View>
            <View  style={[styless.card, styless.elevation]}>
            <View>
                <Text style = {{
                    fontSize:20,
                    textAlign:'center',
                    fontWeight:'bold',
                    marginTop:"5%",
                    marginBottom:"10%"
                }}>SIGNUP</Text>
            </View>
            
            <View style={styless.container}>
                <TextInput 
                style={styless.input}
                placeholder="FullName"
                />
            </View>
            <View style={styless.container}>
                <TextInput 
                style={styless.input}
                placeholder="Email Or Number"
                />
            </View><View style={styless.container}>
                <TextInput 
                style={styless.input}
                placeholder="Password"
                secureTextEntry
                />
            </View>
            <View style={styless.container}>
                <TextInput 
                style={styless.input}
         
                placeholder="Re-enter Password"
                secureTextEntry
                />
            </View>
            <TouchableOpacity style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10%",}}
                onPress ={() => navigation.navigate('Mainscreen')}
          >
                <Text style={{
                      fontSize: 18,
                      backgroundColor: "#F8325C",
                      
                      paddingVertical: "5%",
                      paddingHorizontal:"35%",
                      borderRadius: 20,
                      fontWeight:'bold'
                }}>SignIn</Text>
                
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>


    )
}
const stylesSignUp = StyleSheet.create({
    inputGroup:{
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
        paddingTop:"30%",
       
        
    },


})


export default SignUp;