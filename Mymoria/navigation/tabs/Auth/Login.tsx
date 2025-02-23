import { Component, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, ScrollView } from "react-native";
import FormInput from "../../../components/UI/Forms/TextInputForms";
import ButtonForm from "../../../components/UI/Forms/ButtonForms";
import AuthService from "../../../services/auth-service";



export default function Login ( ){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const authService = AuthService();

    const login = () =>{
        authService.login(username,password);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>
            <FormInput  
                        onDataChange={setUsername}
                        placeHolder="Email"
                          //width="80%"
                        />
            <FormInput  
                        onDataChange={setPassword}
                        placeHolder="Password"
                        secureTextEntry={true}
                          //width="80%"
                        />
            <ButtonForm
                        onPress={login}
                        label="Login"
                        color="#3B5998"
                        />
            <ButtonForm
                        onPress={()=>{
                            alert("register")
                        }}
                        label="Register"
                        color="gray"
                        />           

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        height:'100%',
        width:'100%',
        backgroundColor: '#ffffff',
        alignItems:'center',
      }, 
      title:{
        fontSize:50,
        marginTop:'60%',
        marginBottom:10,
    }
})