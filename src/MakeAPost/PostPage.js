import React, {Component} from 'react';
import {View, StyleSheet, Text } from 'react-native';
import {Header} from './Header'

class PostPage extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Header/>
                <Text>This is where you will make a post</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


export default PostPage;