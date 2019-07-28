import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Tab from './Tab';

const Screens = {
    Tab

}

const Root = createStackNavigator(Screens)
export default createAppContainer(Root);
