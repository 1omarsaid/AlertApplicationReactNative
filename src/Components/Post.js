import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native'

class Post extends Component {
    render() {
        
        const {image} = this.props;
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: image}}/>
                {/* <View style= {styles.header}> */}
                    {/* <Image source= {{uri: logo}} style={styles.headerLogo}/> */}
                    {/* <Text style={styles.hashtag}>#FreeFood</Text> */}
                {/* </View> */}
            </View>

        );
    }
}

const styles = StyleSheet.create({
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
    header: {
        height: 50,
        alignItems: "center",
        width: '95%',
        flexDirection: "row"
    },
    image: {
        height: 200,
        width: '100%',
        resizeMode: 'contain'
        
    },
    headerLogo: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 3
    },
    hashtag: {
        fontSize: 25,
        fontWeight: '700',
        color: '#d35400'
    }
});
export {Post};