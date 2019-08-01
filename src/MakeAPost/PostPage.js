import React, {Component} from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, SegmentedControlIOS } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { TextInput } from 'react-native-gesture-handler';
import firebase from 'react-native-firebase'
import uuid from 'uuid/v4'; // Import UUID to generate UUID


const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };


class PostPage extends Component {

    state = {
        imgSource: '',
        uploading: false,
        progress: 0,
        text: '',
        imageURL: ''
    }


    goBack = () => {
        this.props.navigation.navigate('Root')
    }

    makePost = (postText, image) => {
        this.uploadImage
        firebase.database().ref('posts/school/Ryerson').child(`${uuid()}`).set(
            {
                postText,
                image
            }
        ).then(() => {
            console.log('Inserted!');
            this.props.navigation.navigate('Root')
        }).catch((error) => {
            alert(error)
        });

    }

    pickImage = () => {
        ImagePicker.showImagePicker(options, response => {
          if (response.didCancel) {
            console.log('You cancelled image picker 😟');
          } else if (response.error) {
            alert('And error occured: ', response.error);
          } else {
            const source = { uri: response.uri };
            this.setState({
              imgSource: source,
              imageUri: response.uri
            });
          }
        });
      };


      uploadImage = () => {
        const postID = `${uuid()}`; // Generate unique name
        this.setState({ uploading: true });
        const ref = firebase.storage().ref(`post/images/${postID}`)

        ref.putFile(this.state.imageUri)
          .on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            snapshot => {
              let state = {};
              state = {
                ...state,
                progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100, // Calculate progress percentage
              };
              console.log('************Firebase*************')
              //This resets after the upload has been done.
              if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
                print(snapshot.ref.getDownloadURL)
                this.setState({imageURL:snapshot.ref.getDownloadURL})
                state = {
                  ...state,
                  uploading: false,
                  imgSource: '',
                  imageUri: '',
                  progress: 0,
                  text: '',
                  imageURL: ''
                };
              }
              this.setState(state);
            },
            //This goes off if there is an error.
            error => {
              unsubscribe();
              alert('Sorry, Try again.');
            }
          );
      };


    
    render(){

        const { imageURL, imageUri } = this.state;

        return (
            <View style={styles.container2}>
                <View style={styles.container}>
                <TouchableOpacity onPress={this.goBack}>
                    <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.makePost(this.state.text, this.state.imageURL)}>
                    <Text style={styles.post}>Post</Text>
                </TouchableOpacity>
                </View>

                <View style= {styles.stack1}>
                    <TouchableOpacity onPress={this.pickImage}>

                        <Image source={ imageUri ? {uri: imageUri}: require('../images/Gallery.png')} 
                        style={{width: Math.round(Dimensions.get('window').height) * 0.13, 
                                height: Math.round(Dimensions.get('window').height) * 0.13,
                                borderRadius: 10}}/>
                    
                    </TouchableOpacity>

                    <SegmentedControlIOS
                        values={['Free Food', 'Events']}
                        style={{width: Math.round(Dimensions.get('window').width) * 0.55, height: Math.round(Dimensions.get('window').height) * 0.03, marginLeft: 20}}
                        // selectedIndex={this.state.selectedIndex}
                        // onChange={(event) => {
                        // this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                        // }}
                        />

                </View>
                <View style={styles.textContainer}>
                    <TextInput
                        style= {styles.textContainerInput}
                        multiline = {true}
                        placeholder="What's Happening?"
                        placeholderTextColor='rgba(255,255,255,0.4)'
                        onChangeText={text => this.setState({text})}
                        value= {this.state.text}
                        returnKeyType="done"
                    />
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container:{
        height: Math.round(Dimensions.get('window').height) * 0.1,
        width: '100%',
        borderBottomWidth: 0.2,
        borderColor: 'rgba(0,0,0,0.7)',
        textAlign: "left",
        top: 0,
        backgroundColor: '#2980b9',
        justifyContent: "space-between",
        flexDirection: "row" 

    },
    container2: {
        height: '100%',
        width: '100%'
    },
    title: {
        fontSize: 35,
        fontWeight: '800',
        textAlign: "center",
        color: '#FFFFFF',
        bottom: 0
    },
    cancel:{
        color: 'white',
        marginLeft: 30,
        fontSize: 20
    },
    post: {
        color: '#2980b9',
        marginRight: 10,
        backgroundColor: 'white',
        width: 100,
        height: '50%',
        borderColor: 'white',
        borderRadius: 20,
        textAlign: "center",
        fontSize: 20,
        fontWeight: '500'
    },
    stack1: {
        width: '95%',
        height: Math.round(Dimensions.get('window').height) * 0.13,
        marginTop: Math.round(Dimensions.get('window').height) * 0.05,
        marginLeft: 10,
        flexDirection: "row"
    },
    textContainer: {
        height: Math.round(Dimensions.get('window').height) * 0.25,
        width: '95%',
        backgroundColor: '#2980b9',
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 5
    },
    textContainerInput: {
        height: '100%',
        width: '100%',
        color: '#FFF',
        fontSize: 22,
        marginLeft: 3,
        marginTop: 3
    }

});


export default PostPage;