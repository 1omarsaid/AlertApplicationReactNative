import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {Image, View} from 'react-native';

import Home from '../Tabs/Home';
import Explore from '../Tabs/Explore';
import Likes from '../Tabs/Likes';
import Profile from '../Tabs/Profile';
import Upload from '../Tabs/Upload';
import homelessMap from '../Tabs/homelessMap'

import Icon from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather'

const Screens = {
    Home: {
        screen: Home,
        navigationOptions: () => ({
            tabBarIcon:({focused}) => (
                <AntDesign name={"home"} size={27}
                                        color={focused? '#287348':'#27AE60'}
                />
            )
        }),
    },
    Explore:{
        screen: Explore,
        navigationOptions: () => ({
            tabBarIcon:({focused}) => (
                <Entypo name={"add-to-list"} size={25}
                    color={focused? '#287348':'#27AE60'}   
                />
                
            )
        }),
    },
    Upload:{
        screen: Upload,
        navigationOptions: () => ({
            tabBarIcon:({focused}) => (
                <MaterialIcons name={"event-note"} size={25}
                    color={focused? '#287348':'#27AE60'}   
                />
            )
        }),
    },
    Likes:{
        screen: homelessMap,
        navigationOptions: () => ({
            tabBarIcon:({tintColor, focused}) => (
                <Fontisto name={"map"} size={25}
                    color={focused? '#287348':'#27AE60'}   
                />
            )
        }),
    },
    Profile:{
        screen: Profile,
        navigationOptions: () => ({
            tabBarIcon:({tintColor, focused}) => (
                <Feather name={"settings"} size={25}
                    color={focused? '#287348':'#27AE60'}   
                />
            )
        }),
    }

};

const config = {
    tabBarOptions: {
        showLabel: false

    } 
};

const Tab = createBottomTabNavigator(Screens, config)

export default Tab