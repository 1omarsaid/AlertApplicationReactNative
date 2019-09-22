import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase'
var ViewPort = Dimensions.get('window');
class CausesDetail extends Component {

    goToProfile = () => {

    }


    render(){
        return (
            <ScrollView style={styles.mainView}>
                <View>
                    <TouchableOpacity>
                        <Image
                             source={{uri:'https://instagram.fybz1-1.fna.fbcdn.net/vp/445a1b074c9f974a5ecdb90b611503c0/5DAE35CB/t51.2885-19/s320x320/61539254_500517250487244_7080105174861086720_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net'}}   
                             style={{
                                flex: 1,
                                alignSelf: 'stretch',
                                width: ViewPort.width,
                                resizeMode: 'cover',
                                height: 300,
                                
                            }}
                            />
                    </TouchableOpacity>
                    <View style={{width: '100%', height:'60%'}}>
                        <Text style={styles.titleText}>United Way</Text>
                        <Text style={styles.priceText}>Charity</Text>
                        <View style={{width: '100%', backgroundColor:'rgba(214, 214, 214, 1)', height: 1, top: 5}}></View>
                        <Text style={{fontSize: 25, fontWeight: '800', padding: 10}}>Seller Information</Text>
                            <TouchableOpacity onPress={this.goToProfile}>
                            <View style={{padding: 10}}>
                                
                                <Image
                                    source={{uri:'https://instagram.fybz1-1.fna.fbcdn.net/vp/445a1b074c9f974a5ecdb90b611503c0/5DAE35CB/t51.2885-19/s320x320/61539254_500517250487244_7080105174861086720_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net'}}
                                    
                                    style={{
                                        flex: 1,
                                        alignSelf: 'stretch',
                                        width: 70,
                                        resizeMode: 'cover',
                                        height: 70,
                                        borderRadius: 35,
                                    }}
                                    />
                                
                                <Text style={{fontSize: 16, fontWeight:'600'}}>Omar Said</Text>
                            </View>
                            </TouchableOpacity>
                            <View style={{width: '100%', backgroundColor:'rgba(214, 214, 214, 1)', height: 1, top: 15}}></View>
                            <Text style={styles.descriptionText}>Desctription</Text>
                            <Text style={styles.descriptionInfoText}>This is the post description that is the new thing</Text>

                            <View style={styles.actionButton}>
                                <TouchableOpacity style={{bottom: 100, alignItems: "center", width: '100%'}} onPress={this.contactSeller}>
                                    <View style={styles.contactButtonView}>
                                        <Text style={styles.contactText}>Donate</Text>
                                    </View>
                                </TouchableOpacity>  
                            </View>


                    </View>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    mainView: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
   },
   titleText:{
    marginTop: 10,
    fontSize: 40,
    padding: 10,
    fontWeight:"700"
    },
    priceText:{
        paddingTop: 5,
        paddingLeft: 10,
        fontSize: 25,
    },
    descriptionText: {
        fontSize: 30,
        fontWeight: "700",
        top: 10,
        padding: 10
    },
    descriptionInfoText:{
        fontSize: 25,
        padding: 10,
        height: 300
    },
    contactButtonView:{
        width: '50%',
        backgroundColor: 'white',
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(46, 84, 157, 1)'

    },
    contactText:{
        color: 'rgba(46, 84, 157, 1)',
        fontSize: 25,
        fontWeight: '600'
    },

});

export default CausesDetail;