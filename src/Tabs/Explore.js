import React, {Component} from 'react';
import {View, StyleSheet, FlatList } from 'react-native';
import { SearchBar } from '../Components/SearchBar';
import {PostThumb, MarketHeader} from '../Components';
import { posts } from '../Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Explore extends Component {

    renderPosts = ({item}) => (
        <TouchableOpacity onPress={this.goToCauses}>
        <PostThumb
            image={item.image}
            category={item.category}
        />
        </TouchableOpacity>
        
    )

    goToCauses = () => {
        this.props.navigation.navigate('Causes');
    }


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