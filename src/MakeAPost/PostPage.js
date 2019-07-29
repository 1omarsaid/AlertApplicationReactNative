import React, {Component} from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import {Header} from './Header'

class PostPage extends Component {

    goBack = () => {
        this.props.navigation.navigate('Root')
    }

    makePost = () => {
        this.props.navigation.navigate('Root')
    }

    
    render(){
        return (
            <View style={styles.container2}>
                <View style={styles.container}>
                <TouchableOpacity onPress={this.goBack}>
                    <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.makePost}>
                    <Text style={styles.post}>Post</Text>
                </TouchableOpacity>
                </View>

                <View style= {styles.picture}>
                    <TouchableOpacity>
                        {/* will need to have image picker here with an initial image (look online) */}
                        <Image/>
                        {/* will need to have the picker here for food/events/danger */}
                    </TouchableOpacity>
                    
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
    picture: {

    }

});


export default PostPage;