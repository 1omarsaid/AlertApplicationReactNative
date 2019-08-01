import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import firebase from 'react-native-firebase'




class Profile extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Image
                    source = {{uri:"https://instagram.fybz1-1.fna.fbcdn.net/vp/445a1b074c9f974a5ecdb90b611503c0/5DAE35CB/t51.2885-19/s320x320/61539254_500517250487244_7080105174861086720_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net"}}
                    style={styles.profileImage}
                />
                <View>
                    <Text style={styles.nameTag}>{firebase.auth().currentUser.uid}</Text>
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
        top: Math.round(Dimensions.get('window').height) * 0.05
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
    }
});

export default Profile;