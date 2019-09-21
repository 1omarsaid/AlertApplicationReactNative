import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


class PostThumb extends Component {

    render() {
        const {image} = this.props;

        return(
            <TouchableOpacity onPress={this.onThumbPressed} style={styles.itemTouchable}>
                <View style={styles.container}>
                    <Image style={styles.imgImage} source={{uri: image}}/>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    itemTouchable:{
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'flex-start',
        height: 200,
        padding: 2,
        paddingBottom: 10
    },
    container:{
        width: 200,
        height: 200,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 10,
        marginLeft: '1%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10
    },
    imgImage: {
        resizeMode: 'cover',
        flex: 1,
        width: '100%',
        height: 230,
        borderRadius: 5
      },
      titleText:{
          fontSize: 25,
          fontWeight: '200'
      },
      subTitleText:{
          fontWeight: "700",
          fontSize: 15
      }

        
});

export {PostThumb};