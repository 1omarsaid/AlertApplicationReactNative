import React, {Component} from 'react';
import {View } from 'react-native';
import {HomeHeader} from '../Components/HomeHeader';

class Home extends Component {
    render(){
        return (
            <View>
                <HomeHeader/>
            </View>
        );
    }
}

export default Home;