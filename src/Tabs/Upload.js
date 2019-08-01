import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,Dimensions} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import firebase from 'react-native-firebase';
import uuid from 'uuid/v4'; // Import UUID to generate UUID


const window = Dimensions.get('window');
export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };

class Upload extends Component {

    render(){
        return (
          <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <TextInput
              placeholder="Email"
              style={styles.input}
            />
            <TextInput
              placeholder="Username"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
            />
            <TextInput
              placeholder="Confirm Password"
              style={styles.input}
            />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4c69a5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
   // paddingVertical: 5,
    // paddingHorizontal: 15,
    width: window.width - 30,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding:10,
    marginTop:20
  },
  register:{
    marginBottom:20, 
    width:window.width -100,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    backgroundColor: '#ffae',}
});

export default Upload;