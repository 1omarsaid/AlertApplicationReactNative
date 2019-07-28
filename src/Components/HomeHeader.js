import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native'




class HomeHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Alert</Text>
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
        fontSize: 45,
        fontWeight: '800',
        textAlign: "left",
        width: '100%',
        color: '#FFFFFF',
        marginLeft: 10,
    }

});


export{HomeHeader};