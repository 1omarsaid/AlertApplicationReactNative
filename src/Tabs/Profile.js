import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase'

class Profile extends Component {
//                    <Image style={{width: '150%', height: 90}} source={{uri: 'https://i.imgur.com/6UcJAfI.jpg'}}/>

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{uri: 'https://i.imgur.com/fdOyAil.png'}}/>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                    <Text style={styles.name}>Omar Said</Text>
                    <Text style={styles.info}>Member since August 2019</Text>
                    <Text style={styles.description}></Text>
                    <Image style={{width: '150%', height: 70}} source={{uri: 'https://i.imgur.com/N1DLHFp.jpg'}}/>


                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text>LINK A CARD</Text> 
                    </TouchableOpacity>

                    <Image style={{width: '150%', height: 25, bottom: -5}} source={{uri: 'https://i.imgur.com/O0f0Y5H.png'}}/>

                    <Image style={{width: '150%', height: 90, bottom: -30}} source={{uri: 'https://i.imgur.com/rzGwMRD.jpg'}}/>
                    <Image style={{width: '150%', height: 120, bottom: -35}} source={{uri: 'https://i.imgur.com/fsLnEcf.jpg'}}/>
                    <TouchableOpacity style={styles.buttonBottom}>
                        <Text>LOGOUT</Text> 
                    </TouchableOpacity>

                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        alignItems: 'center',
        top: -50
    },
    profileImage: {
        top: Math.round(Dimensions.get('window').height) * 0.05,
        width: Math.round(Dimensions.get('window').height) * 0.2,
        height: Math.round(Dimensions.get('window').height) * 0.2,
        borderRadius: Math.round(Dimensions.get('window').height) * 0.1

    },
    nameTag: {
        fontSize: 25,
        color: 'red'
    },
    header:{
        backgroundColor: "#00BFFF",
        height:200,
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
      },
      body:{
        marginTop:40,
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
      },
      name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
      },
      info:{
        fontSize:16,
        color: "#4aB19D",
        marginTop:10
      },
      description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
      },
      buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#4aB19D",
        color: "#fff"
      },
      buttonBottom: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:250,
        borderRadius:30,
        backgroundColor: "#4aB19D",
        position: 'absolute',
        bottom:170,
        color: "#ffffff"
      }
});

export default Profile;