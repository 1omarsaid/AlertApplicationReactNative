import React, {Component} from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, SegmentedControlIOS } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { TextInput } from 'react-native-gesture-handler';
import firebase from 'react-native-firebase'


class PostPage extends Component {

    state = {
        photo: null,
        text: ''
    }


    goBack = () => {
        this.props.navigation.navigate('Root')
    }

    makePost = (postText) => {
        firebase.database().ref('user/001').set(
            {
                postText
            }
        ).then(() => {
            console.log('Inserted!');
            this.props.navigation.navigate('Root')
        }).catch((error) => {
            alert(error)
        });

    }

    handleChoosePhoto = () => {
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

    
    render(){

        const { photo } = this.state;

        return (
            <View style={styles.container2}>
                <View style={styles.container}>
                <TouchableOpacity onPress={this.goBack}>
                    <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.makePost(this.state.text)}>
                    <Text style={styles.post}>Post</Text>
                </TouchableOpacity>
                </View>

                <View style= {styles.stack1}>
                    <TouchableOpacity onPress={this.handleChoosePhoto}>

                        <Image source={ photo ? {uri: photo.uri}: require('../images/Gallery.png')} 
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