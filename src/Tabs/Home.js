import React, {Component} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import {HomeHeader,Post} from '../Components';

import {images, posts} from '../Constants'

class Home extends Component {

    renderPosts = ({item}) => (
        <Post 
            image={item.image} 
            logo={item.logo} 
            name={item.name} 
            noOfLikes={item.noOfLikes}
            caption = {item.caption}
        />
    )

    makeAPost = () => {
        this.props.navigation.navigate('PostPage')
    }



    render(){
        return (
            <View>
                <HomeHeader/>
                <FlatList
                    data={posts}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderPosts}
                    style={styles.postfeed}
                />
                <TouchableOpacity onPress={this.makeAPost} style={styles.fab}>
                    <Text style={styles.fabIcon}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    ScrollView:{
        borderBottomWidth: 0.3,
        borderColor: 'rgba(0,0,0,09)',
        
    },
    postfeed: {
        height: '90%',
        marginTop: 3
    },
    fab: {
        position: "absolute",
        width: Math.round(Dimensions.get('window').height) * 0.06,
        height: Math.round(Dimensions.get('window').height) * 0.06,
        alignItems: "center",
        justifyContent: "center",
        right: Math.round(Dimensions.get('window').height) * 0.03,
        bottom: Math.round(Dimensions.get('window').height) * 0.07,
        backgroundColor: '#2980b9', 
        borderRadius: Math.round(Dimensions.get('window').height) * 0.03,
        elevation: 8 
    },
    fabIcon: {
        fontSize: 40,
        color: 'white'
    }
});

export default Home;