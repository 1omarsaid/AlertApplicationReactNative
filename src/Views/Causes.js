import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Dimensions,Image, Text } from 'react-native';
import {CausesHeader} from '../Components'
import { SearchBar } from '../Components/SearchBar';
import {PostThumb} from '../Components';
import { causes } from '../Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';


class Causes extends Component {

    renderPosts = ({item}) => (
        <TouchableOpacity onPress={this.goToDetail}>
        <PostThumb
            image={item.image}
            category={item.category}
        />
        </TouchableOpacity>
        
        
    )

    goToCauses = () => {
        this.props.navigation.navigate('Explore');
    }

    goToDetail = () => {
        this.props.navigation.navigate('CausesDetail');
    }


    render(){
        return (
            <View style={styles.parent}>
                
                <View style={styles.container}>
                <View style={{justifyContent: 'space-between', flexDirection:'row'}}>

                    <TouchableOpacity onPress={this.goToCauses}>
                        <Image source={require('./../Assets/images/left.png')}/>
                    </TouchableOpacity>

                    <Text style={styles.title}>Community</Text>

                    <TouchableOpacity onPress={this.goBackPressed}>
                        <Fontisto name={"map"} size={25} color={"#FFFFFF"} style={{paddingRight: 10}}/>
                    </TouchableOpacity>
                </View>
                
                </View>  


                <View style={{width:'100%', alignItems: "center", marginTop: 20}}>
                        <SearchBar/> 
                </View>
                         
                <FlatList 
                    style={styles.flatlist}
                    renderItem={this.renderPosts}
                    data={causes}
                    keyExtractor={(item, index) => index}
                    numColumns={2}
                />  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: Math.round(Dimensions.get('window').height) * 0.13,
        width: '100%',
        backgroundColor: '#287348',
        flexDirection:'column-reverse'
    },
    title: {
        fontSize: 35,
        fontWeight: '800',
        textAlign: "center",
        width: '50%',
        color: '#FFFFFF',
        marginBottom: 10
    },
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

export default Causes;