import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Text, StatusBar, KeyboardAvoidingView, Dimensions, Button, Image} from 'react-native'
import firebase from 'react-native-firebase'
import {SafeAreaView} from 'react-navigation'
import ImagePicker from 'react-native-image-picker'

export default class SignUp extends React.Component {
  state = { 
        name: '',
        email: '', 
        password: '', 
        confirmpassword: '',
        photo: null ,
        errorMessage: null };


    getProfileImage = () => {
        const options = {
            noData: true
        };

        ImagePicker.launchImageLibrary(options, response => {
            console.log("response", response);
            if(response.uri) {
                this.setState({photo: response});
            }
        });
    };

    checkinputs = () => {
        if (this.state.password =! this.state.confirmpassword) {
            alert("Passwords do not match")
            return
        }
    }


  handleSignUp = (name, email) => {
    this.checkinputs()
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) =>{
        firebase.database().ref('users').child(res.user.uid).set({
            name,
            email
        })
        console.log(res.user.uid)
        res.user.sendEmailVerification();
        this.props.navigation.navigate("Root");
      } )
      .catch(error => this.setState({ errorMessage: error.message }))
  };

  render() {

    const {photo} = this.state;

    return (
        <SafeAreaView style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <Text style={styles.title}>REGISTER</Text>
            
            <TouchableOpacity onPress={this.getProfileImage}>
                <Image source={ photo? {uri: photo.uri} :require('../images/registerIcon.png')} style={styles.profileImage}/>
            </TouchableOpacity>
                
                <View style={styles.container2}>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Name'
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        returnKeyType="next"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onSubmitEditing={() => this.emailInput.focus()}
                        ref={(input) => this.emailInput = input}
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder='Email (University Domain)'
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        onSubmitEditing={() => this.passwordInput.focus()}
                        returnKeyType="next"
                        keyboardType="email-address"
                        autoCapitalize = 'none'
                        ref={(input) => this.emailInput = input}
                        autoCorrect={false}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        />
                    <TextInput 
                        style={styles.input} 
                        placeholder='Password'
                        secureTextEntry
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        returnKeyType="next"
                        onSubmitEditing={() => this.confirmPassword.focus()}
                        ref={(input) => this.passwordInput = input}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        />
                    
                    <TextInput 
                        style={styles.input} 
                        placeholder='Confirm Password'
                        secureTextEntry
                        placeholderTextColor='rgba(255,255,255,0.7)'
                        returnKeyType="go"
                        ref={(input) => this.confirmPassword = input}
                        value={this.state.confirmpassword}
                        onChangeText={confirmpassword => this.setState({ confirmpassword })}
                        />
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.handleSignUp(this.state.name, this.state.email)}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.alreadyhaveaccount}>
                        <Text onPress={() => this.props.navigation.navigate('Login')} style={styles.buttonText}>Already have an account? Login!</Text>
                    </TouchableOpacity>

                    {this.state.errorMessage && <Text style={{ color: 'red' , textAlign: "center", width: '100%'}}>
                    {this.state.errorMessage}
                    </Text>}

                </View>
                
            </SafeAreaView>

    )
  }
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex: 1,
        height: '100%',
        width:'100%',
        backgroundColor: '#2980b9',
        alignItems: "center"
    },
    input:{
        height: 40,
        marginBottom: 7,
        color: '#FFF',
        paddingHorizontal: 5, 
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        width: '95%'
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
    alreadyhaveaccount:{
        textAlign: "center",
        color: '#FFFFFF',
        fontWeight: '400',
        width:'100%',
        marginTop: 4,
        fontSize: 16,
        opacity: 0.8
    },
    errorTextStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red',
        width:'95%'
      },
    title: {
        width: '95%',
        fontSize: 40,
        color:'#FFFFFF',
        textAlign: "center",
        fontWeight:'800',
        marginBottom: 15,
        top: Math.round(Dimensions.get('window').height) * 0.04,
    },
    container2: {
        top: Math.round(Dimensions.get('window').height) * 0.1,
        width: '100%'
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        top: 50,
    }

});
