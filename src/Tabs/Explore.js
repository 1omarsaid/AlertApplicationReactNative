import React, {Component} from 'react';
import {View, StyleSheet, FlatList } from 'react-native';
import {MarketHeader} from '../Components'
import { SearchBar } from '../Components/SearchBar';
import {PostThumb} from '../Components';
import { posts } from '../Constants';


class Explore extends Component {

    renderPosts = ({item}) => (
        <PostThumb
            image={item.image}
        />
    )


    render(){
        return (
            <View style={styles.parent}>
                <MarketHeader/>
                <View style={{width:'100%', alignItems: "center", marginTop: 20}}>
                        <SearchBar/> 
                </View>

                <FlatList 
                    style={styles.flatlist}
                    renderItem={this.renderPosts}
                    data={posts}
                    keyExtractor={(item, index) => index}
                    numColumns={2}
                />  
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
       flex: 1 
    },
    flatlist: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        alignSelf: 'center',
        height: 500,
        marginTop: 5
      }
    
});

export default Explore;