import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Home from '../Tabs/Home';
import Explore from '../Tabs/Explore';
import Likes from '../Tabs/Likes';
import Profile from '../Tabs/Profile';

const Screens = {
    Home,
    Explore,
    Likes,
    Profile

};

const Tab = createBottomTabNavigator(Screens)

export default Tab