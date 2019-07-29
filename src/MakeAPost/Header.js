import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native'




class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Make a Post</Text>
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
        bottom: 0,
        justifyContent: "flex-end",
        flexDirection: "column" 

    },
    title: {
        fontSize: 35,
        fontWeight: '800',
        textAlign: "center",
        width: '100%',
        color: '#FFFFFF'
    }

});


export{Header};