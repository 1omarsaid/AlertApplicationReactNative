import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native'

class Post extends Component {
    render() {
        const ShadowStyle = {
            shadowOpacity: 0.5,
            shadowRadius: 15,
            elevation: 4
        }
        const {image, logo, name, noOfLikes, caption} = this.props;
        return (
            <View style={[styles.container, ShadowStyle]}>
                <Image style={styles.image} source={{uri: image}}/>
                <View style= {styles.header}>
                    <Image source= {{uri: logo}} style={styles.headerLogo}/>
                    <Text style={styles.hashtag}>#FreeFood</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: '98%',
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 10,
        marginLeft: '1%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10
    },
    header: {
        height: 50,
        alignItems: "center",
        width: '95%',
        flexDirection: "row"
    },
    image: {
        height: 320,
        width: '100%',
    },
    headerLogo: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 3
    },
    hashtag: {
        fontSize: 25,
        fontWeight: '700',
        color: '#d35400'
    }
});
export {Post};