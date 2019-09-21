

import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { montserratRegular } from '../../Assets/GlobalStyles';


class Header extends React.PureComponent<HeaderOneStateProps & HeaderOneOwnProps> {
  render() {
    return (
      <LinearGradient
        end={{
          x: 0.96,
          y: 0.5
        }}
        start={{
          x: -0.0,
          y: 0.5
        }}
        colors={[this.props.gradientDarkColor, this.props.gradientLightColor]}
        locations={[0.0, 1.0]}
        style={{
          //top: -10,
          height: 60,
          width: '100%',
          flexDirection: 'row',
          alignContent: 'flex-end',
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            marginRight: 8,
            height: 60,
            left: 0,
            position: 'absolute'
          }}
        >
          {this.props.leftNavIcon ? (
            <TouchableOpacity style={{ padding: 5, justifyContent: 'center' }} onPress={this.props.leftBtnPressed}>
              <Image source={this.props.leftNavIcon} />
            </TouchableOpacity>
          ) : null}
        </View>

        {this.props.title ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 60,
              maxWidth: '60%'
            }}
          >
            <Text style={{ color: 'white', fontSize: 22, maxWidth: '100%', fontFamily: montserratRegular, }} numberOfLines={1}>{this.props.title}</Text>
          </View>
        ) : null}

        <View
          style={{
            flexDirection: 'row',
            marginRight: 8,
            height: 60,
            right: 0,
            position: 'absolute'
          }}
        >
          {this.props.iconOne ? (
            <TouchableOpacity style={{ padding: 5, justifyContent: 'center' }} onPress={this.props.btnOnePressed}>
              <Image source={this.props.iconOne} style={{width: 25, height: 25}}/>
            </TouchableOpacity>
          ) : null}

          {this.props.iconTwo ? (
            <TouchableOpacity style={{ padding: 5, justifyContent: 'center' }} onPress={this.props.btnTwoPressed}>
              <Image source={this.props.iconTwo} />
            </TouchableOpacity>
          ) : null}
        </View>
      </LinearGradient>
    );
  }
}


export default Header;
