import React, { Component } from 'react';
import {StyleSheet,View,Dimensions} from 'react-native';
import {TransactionHeader} from '../Components';

const window = Dimensions.get('window');
export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;


  //<Image source={logo} style={styles.logo} />

class Upload extends Component {

    render(){
        return (
          <View>
            <TransactionHeader/>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default Upload;