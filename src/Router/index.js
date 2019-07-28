import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Tab from './Tab';

const Screens = {
    Tab

}

const config = {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false
    }
}

const Root = createStackNavigator(Screens, config)
export default createAppContainer(Root);
