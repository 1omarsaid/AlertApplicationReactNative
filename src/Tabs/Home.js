import React, {Component} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, Text, Dimensions, Image } from 'react-native';
import {Post} from '../Components';

import {images, posts} from '../Constants'
import { SearchBar } from '../Components/SearchBar';
import { ScrollView } from 'react-native-gesture-handler';

class Home extends Component {

    renderPosts = ({item}) => (
        <TouchableOpacity style={{padding: 10}} onPress={this.makeAPost}>
        <Post 
            image={item.image}
        />
        </TouchableOpacity>
        
    )

    makeAPost = () => {
        this.props.navigation.navigate('PostPage')
    }



    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.username}>
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.usernameText}>Omar Said</Text>
                            <Image source={{uri: 'https://i.imgur.com/fdOyAil.png'}} style={{width: 70, height: 70, borderRadius: 35, marginLeft: 90, marginTop: -15}}/>
                        </View>
                    </View>
                    <View style={{marginTop: 10, paddingLeft: 15, marginBottom: 10}}>
                        <Text style={styles.accountText}>Account Balance: $500</Text>
                    </View>

                    <View style={{width:'100%', alignItems: "center", marginTop: 5}}>
                        <SearchBar/> 
                    </View>
                    <View style={{width: '100%', alignItems: 'center', height: 40, marginTop: 30}}>
                        <Text style={styles.titleCauses1}>Urgent Causes</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{width:'100%', height:190, marginTop: 30, alignItems: "center"}}>
                            <Image source ={{uri: 'https://i.imgur.com/ACwsNUo.jpg'}} style={{width: '80%', height: '100%', borderRadius: 10}}/>
                        </View>
                    </TouchableOpacity>

                    <View style={{width: '100%', alignItems: 'center', height: 40, marginTop: 30}}>
                        <Text style={styles.titleCauses}>Recommended Causes</Text>
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

                    
                    
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
    },
    username:{
        width: "100%",
        height: '16%',
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
    titleCauses1: {
        fontSize: 30,
        fontWeight: '600',
        color: '#9e2d23'
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
        marginBottom: 40,
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