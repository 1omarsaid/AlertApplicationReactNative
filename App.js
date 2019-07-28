import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import Login from './src/Auth/Login';
import Register from './src/Auth/Register';
import Loading from './src/Auth/Loading';
import Root from './src/Router/index';

const App = createAppContainer(createSwitchNavigator(
  {
    Loading,
    Register,
    Login,
    Root
  },
  {
    initialRouteName: 'Register'
  }
));
export default App
