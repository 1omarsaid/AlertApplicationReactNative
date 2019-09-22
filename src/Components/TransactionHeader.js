import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native'




class TransactionHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Transactions</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: Math.round(Dimensions.get('window').height) * 0.13,
        width: '100%',
        borderBottomWidth: 0.2,
        borderColor: 'rgba(0,0,0,0.7)',
        textAlign: "left",
        top: 0,
        backgroundColor: '#287348',
        bottom: 0,
        justifyContent: "flex-end",
        flexDirection: "column" 

    },
    title: {
        fontSize: 35,
        fontWeight: '800',
        textAlign: "center",
        width: '100%',
        color: '#FFFFFF',
        marginBottom: 10
    }

});


export{TransactionHeader};