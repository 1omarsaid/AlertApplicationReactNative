import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import firebase from 'react-native-firebase';
import uuid from 'uuid/v4'; // Import UUID to generate UUID

const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };

class Upload extends Component {

    state = {
        imgSource: '',
        uploading: false,
        progress: 0
      };


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
        firebase
          .storage()
          .ref(`post/images/${postID}`)
          .putFile(this.state.imageUri)
          .on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            snapshot => {
              let state = {};
              state = {
                ...state,
                progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // Calculate progress percentage
              };
              //This resets after the upload has been done.
              if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
                state = {
                  ...state,
                  uploading: false,
                  imgSource: '',
                  imageUri: '',
                  progress: 0
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

        const { uploading, imgSource, progress} = this.state;
        const disabledStyle = uploading ? styles.disabledBtn : {};
        const actionBtnStyles = [styles.btn, disabledStyle];

        return (
          <View style={styles.container}>
            <TouchableOpacity
              style={actionBtnStyles}
              onPress={this.pickImage}
              disabled={uploading}
            >
              <View>
                <Text style={styles.btnTxt}>Pick image</Text>
              </View>
            </TouchableOpacity>
            {/** Display selected image */}
            {imgSource !== '' && (
              <View>
                <Image source={imgSource} style={styles.image} />
                {uploading && (
                  <View
                    style={[styles.progressBar, { width: `${progress}%` }]}
                  />
                )}
                <TouchableOpacity
                  style={actionBtnStyles}
                  onPress={this.uploadImage}
                  disabled={uploading}
                >
                  <View>
                    {uploading ? (
                      <Text style={styles.btnTxt}>Uploading ...</Text>
                    ) : (
                      <Text style={styles.btnTxt}>Upload image</Text>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            )}
            <View>
            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      marginTop: 20,
      paddingLeft: 5,
      paddingRight: 5,
      height: '100%'
    },
    btn: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 20,
      backgroundColor: 'rgb(3, 154, 229)',
      marginTop: 20,
      alignItems: 'center'
    },
    disabledBtn: {
      backgroundColor: 'rgba(3,155,229,0.5)'
    },
    btnTxt: {
      color: '#fff'
    },
    image: {
      marginTop: 20,
      width: 200,
      height: 200
    },
    progressBar: {
      backgroundColor: 'rgb(3, 154, 229)',
      height: 3,
      shadowColor: '#000',
    }
  });

export default Upload;