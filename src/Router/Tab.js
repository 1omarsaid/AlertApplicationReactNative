import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {Image, View} from 'react-native';

import Home from '../Tabs/Home';
import Explore from '../Tabs/Explore';
import Likes from '../Tabs/Likes';
import Profile from '../Tabs/Profile';
import Upload from '../Tabs/Upload';


import Icon from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Screens = {
    Home: {
        screen: Home,
        navigationOptions: () => ({
            tabBarIcon:({focused}) => (
                <MaterialCommunityIcons name={focused? "script-text" : "script-text-outline" } size={27}
                                        color={focused? '#4180b4':'#7897b0'}
                />
            )
        }),
    },
    Explore:{
        screen: Explore,
        navigationOptions: () => ({
            tabBarIcon:({focused}) => (
                <AntDesign name={focused? "appstore1" : "appstore-o"} size={25}
                           color={focused? '#4180b4':'#7897b0'}
                />
                
            )
        }),
    },
    Upload:{
        screen: Upload,
        navigationOptions: () => ({
            tabBarIcon:({focused}) => (
                focused? <FontAwesome5 name={"globe-americas"} size={25}/>
                :<Ionicons name={"md-globe"} size={30}
                    color={focused? '#4180b4':'#7897b0'}
                />
            )
        }),
    },
    Likes:{
        screen: Likes,
        navigationOptions: () => ({
            tabBarIcon:({tintColor, focused}) => (
                <AntDesign name={ focused ? "heart" : "hearto"} size={25}
                           color={focused? '#4180b4':'#7897b0'}
                />
            )
        }),
    },
    Profile:{
        screen: Profile,
        navigationOptions: () => ({
            tabBarIcon:({tintColor, focused}) => (
                <View style = {{ height: 30, width: 30, borderRadius: 15, borderWidth: focused ? 1: 0, borderColor: 'black', justifyContent: "center", alignItems: "center"}}>
                    <Image 
                    style = {{height: 25, width: 25, borderRadius: 25/2}}
                    source = {{uri:"https://instagram.fybz1-1.fna.fbcdn.net/vp/445a1b074c9f974a5ecdb90b611503c0/5DAE35CB/t51.2885-19/s320x320/61539254_500517250487244_7080105174861086720_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net"}}/>
                </View>
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