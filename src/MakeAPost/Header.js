import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';




class Header extends Component {

    goBack = () => {
        // this.props.navigation.navigate('Root')
        alert("Go back")
    }

    makePost = () => {
        this.props.navigation.navigate('Root')
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.goBack}>
                    <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
                
                <Text style={styles.title}>Make a Post</Text>
                <TouchableOpacity onPress={this.makePost}>
                    <Text style={styles.post}>Post</Text>
                </TouchableOpacity>
                
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
        bottom: 0,
        backgroundColor: '#2980b9',
        justifyContent: "space-between",
        flexDirection: "row" 

    },
    title: {
        fontSize: 35,
        fontWeight: '800',
        textAlign: "center",
        color: '#FFFFFF',
        bottom: 0
    },
    back:{
        color: 'white',
        marginLeft: 30
    },
    post: {
        color: 'white',
        marginRight: 50
    }

});


export{Header};