import React, {Component} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, Text, Dimensions, Image } from 'react-native';
import {Post} from '../Components';

import {images, posts} from '../Constants'
import { SearchBar } from '../Components/SearchBar';
import { ScrollView } from 'react-native-gesture-handler';

class Home extends Component {

    renderPosts = ({item}) => (
        <TouchableOpacity style={{padding: 10}}>
        <Post 
            image={item.image} 
            // logo={item.logo} 
            // name={item.name} 
            // noOfLikes={item.noOfLikes}
            // caption = {item.caption}
        />
        </TouchableOpacity>
        
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
                <ScrollView>
                    <View style={styles.username}>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.usernameText}>Omar Said</Text>
                            <Image source={{uri: 'https://instagram.fybz1-1.fna.fbcdn.net/vp/445a1b074c9f974a5ecdb90b611503c0/5DAE35CB/t51.2885-19/s320x320/61539254_500517250487244_7080105174861086720_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net'}} style={{width: 70, height: 70, borderRadius: 35, marginLeft: 90, marginTop: -15}}/>
                        </View>
                    </View>
                    
                    <View style={{width:'100%', alignItems: "center", marginTop: 40}}>
                        <SearchBar/> 
                    </View>
                    <TouchableOpacity>
                        <View style={{width:'100%', height:190, marginTop: 30, alignItems: "center"}}>
                            <Image source ={{uri: 'https://instagram.fybz1-1.fna.fbcdn.net/vp/11c20d00a852bfeea95b074711e46e8c/5DCB103B/t51.2885-19/s150x150/61539254_500517250487244_7080105174861086720_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net'}} style={{width: '80%', height: '100%', borderRadius: 10}}/>
                        </View>
                    </TouchableOpacity>

                    <View style={{width: '100%', alignItems: 'center', height: 40, marginTop: 30}}>
                        <Text style={styles.titleCauses}>Features Causes</Text>
                    </View>
                    
                    {/* this will have the list view */}
                    <View style={styles.listView}>
                        <FlatList
                        horizontal={true}
                        data={posts}
                        numColumns={1}
                        keyExtractor={(item, index) => index}
                        renderItem={this.renderPosts}
                        style={styles.viewFlatList} 
                        /> 

                    </View>

                    <View style={{marginBottom: 135, marginTop: 10, alignItems: "center"}}>
                        <Text style={styles.accountText}>Account Balance: $500</Text>
                    </View>
                    
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white'
    },
    username:{
        width: "100%",
        height: '20%',
        flexDirection: 'column-reverse',
        padding: 10,
        marginTop: 40
    },
    usernameText:{
        fontSize: 45
    },
    titleCauses: {
        fontSize: 30,
        fontWeight: '600',
        color: '#287348'
    },
    accountText:{
        fontSize: 25,
        fontWeight: '400',
        color: '#287348'
    },
    listView: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        alignSelf: 'stretch',
        marginTop: 1.0,
        marginBottom: 10,
        paddingTop: 5,
        paddingBottom: 5,
        height: 300,

        width: '100%'
      },
      headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
      },
      viewFlatList: {
        alignSelf: 'stretch',
        marginTop: 17.0,
        paddingLeft: 10,
        paddingRight: 10,
        tintColor: 'red',
        color: 'red',
        height: 400,
        // width: '100%'
      }

});

export default Home;