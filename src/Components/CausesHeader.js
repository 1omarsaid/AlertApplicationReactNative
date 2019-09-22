import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';




class CausesHeader extends Component {

    onBackPressed = () => {
        this.props.navigation.navigate('Root');
      };

    render() {
        return (
            <View style={styles.container}>
                <View style={{justifyContent: 'space-between', flexDirection:'row'}}>

                    <TouchableOpacity onPress={this.goBackPressed}>
                        <Image source={require('./../Assets/images/left.png')}/>
                    </TouchableOpacity>

                    <Text style={styles.title}>Community</Text>

                    <TouchableOpacity onPress={this.goBackPressed}>
                        <Fontisto name={"map"} size={25} color={"#FFFFFF"} style={{paddingRight: 10}}/>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: Math.round(Dimensions.get('window').height) * 0.13,
        width: '100%',
        backgroundColor: '#287348',
        flexDirection:'column-reverse'
    },
    title: {
        fontSize: 35,
        fontWeight: '800',
        textAlign: "center",
        width: '50%',
        color: '#FFFFFF',
        marginBottom: 10
    }

});


export{CausesHeader};