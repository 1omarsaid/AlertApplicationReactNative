import React, {Component} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, Text, Dimensions, Image } from 'react-native';
import {HomeHeader,Post} from '../Components';

import {images, posts} from '../Constants'
import { SearchBar } from '../Components/SearchBar';

class Home extends Component {

    renderPosts = ({item}) => (
        <Post 
            image={item.image} 
            logo={item.logo} 
            name={item.name} 
            noOfLikes={item.noOfLikes}
            caption = {item.caption}
        />
    )

    makeAPost = () => {
        this.props.navigation.navigate('PostPage')
    }

    onViewMorePressed = () => {
        this.props.navigation.navigate("PostPage")
    }



    render(){
        return (
            <View style={styles.container}>
                <View style={styles.username}>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.usernameText}>Omar Said</Text>
                        <Image style={{width: 50, height: 50,backgroundColor: 'red', borderRadius: 25, marginLeft: 90, marginTop: 4}}/>
                    </View>
                </View>
                <View style={{width:'100%', alignItems: "center", marginTop: 40}}>
                    <SearchBar/> 
                </View>
                <TouchableOpacity>
                    <View style={{width:'100%', height:190, marginTop: 30, alignItems: "center"}}>
                        <Image style={{width: '80%', height: '100%',backgroundColor: 'red', borderRadius: 10}}/>
                    </View>
                </TouchableOpacity>
                
                {/* this will have the list view */}
                <View style={styles.listView}>
                <View style={styles.headerView}>
                <TouchableOpacity onPress={this.onViewMorePressed} style={styles.viewMoreView}>
                    <Text
                    numberOfLines={1}
                    style={styles.viewMoreText}>
                    {strings('view more')}
                    </Text>
                    <Image style={styles.arrowImg} source={require('./../../Assets/images/ic-arr-right.png')} />
                </TouchableOpacity>
                </View>

                <FlatList
                    horizontal={true}
                    data={this.props.data}
                    numColumns={1}
                    renderItem={this.props.renderItem}
                    keyExtractor={this.props.keyExtractor}
                    style={styles.viewFlatList} /> 
                </View>

                
        
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    username:{
        width: "100%",
        height: '20%',
        flexDirection: 'column-reverse',
        padding: 10
    },
    usernameText:{
        fontSize: 45
    },
    listView: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        alignSelf: 'stretch',
        marginTop: 14.0,
        marginBottom: 10,
        paddingTop: 15,
        paddingBottom: 15,
        shadowOffset: { width: 0.0, height: 5.0 },
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowRadius: 5.0,
        shadowOpacity: 1,
      },
      headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
      },
      viewMoreView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      viewMoreText: {
        color: '#2051A4',
        fontSize: 14.0,
        fontFamily: montserratRegular,
        textAlign: 'right'
      },
      arrowImg: {
        resizeMode: 'center',
    
        marginTop: 2.0
      },
      viewFlatList: {
        alignSelf: 'stretch',
        marginTop: 17.0,
        paddingLeft: 10,
        paddingRight: 10,
        tintColor: 'red',
        color: 'red'
      }

});

export default Home;