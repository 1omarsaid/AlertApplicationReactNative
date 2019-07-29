import React, {Component} from 'react';
import {View, StyleSheet } from 'react-native';
import {MarketHeader} from '../Components'


class Explore extends Component {
    render(){
        return (
            <View style={styles.parent}>
                <MarketHeader/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor : 'red'
    }
});

export default Explore;