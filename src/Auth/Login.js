// Login.js
import React from 'react';
import {View, StyleSheet, Text, KeyboardAvoidingView, TextInput, SafeAreaView, TouchableOpacity, Dimensions, Button, Image} from 'react-native'
import firebase from 'react-native-firebase'

export default class Login extends React.Component {
  state = {
      email: '',
      password: '',
      errorMessage: null };


  handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) =>{
        console.log("i'm loged");
        //This is going to the Main screen when the login is done
        this.props.navigation.navigate("Root");

      })
      .catch(error => this.setState({ errorMessage: error.message }))
  };

    render() {
    return (
        
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <SafeAreaView style={styles.formContainer}>
                        <Image 
                            source = {require('../images/alertlogo.png')}
                            style={styles.imageLogo} />
                    
                    <TextInput 
                        style={styles.input} 
                        placeholder='Email (University Domain)'
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        onSubmitEditing={() => this.passwordInput.focus()}
                        returnKeyType="next"
                        keyboardType="email-address"
                        autoCapitalize = 'none'
                        autoCorrect={false}
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                        />
                    <TextInput 
                        style={styles.input} 
                        placeholder='Password'
                        secureTextEntry
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        returnKeyType="go"
                        ref={(input) => this.passwordInput = input}
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                        />

                    <TouchableOpacity style={styles.buttonContainer} onPress={this.handleLogin}>
                        <Text onPress={this.handleLogin} style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.createanaccount}>
                        <Text onPress = {() => this.props.navigation.navigate('Register')} style={styles.buttonText}>Don't have an account? Sign Up</Text>
                    </TouchableOpacity>

                    {this.state.errorMessage && <Text style={{ color: 'red' }}> {this.state.errorMessage} </Text>}

                
                </SafeAreaView>

            </KeyboardAvoidingView>

    )
  }
}


const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex: 1,
        backgroundColor: '#2980b9',
        height: '100%',
        width: '100%',
        alignItems: "center"
        
    },
    logoContainer:{
        alignItems: "center",
        flex: 1,
        top: 150,

    },
    formContainer:{
        width: '100%'
    },
    logo:{
        width: 250,
        height: 250
    },
    title:{
        color: '#FFF',
        marginTop: 10,
        width: '90%',
        textAlign: "center",
        fontWeight: 'bold',
        opacity: 0.7
    },
    input:{
        height: 40,
        marginBottom: 7,
        color: '#FFF',
        paddingHorizontal: 5, 
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    buttonContainer: {
        backgroundColor: '#3498db',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: "center",
        color: '#FFFFFF',
        fontWeight: '700'
    },
    createanaccount:{
        color: "#FFFFFF",
        width: '100%',
        textAlign: "center",
        marginTop: 4,
        fontSize: 16,
        opacity: 0.8,
    },
    imageLogo: {
        width: Math.round(Dimensions.get('window').height) * 0.2 , 
        height: Math.round(Dimensions.get('window').height) * 0.2,
        alignContent: "center",
        
    }

})

