import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions, Text, ScrollView, TouchableOpacity, TouchableHighlight, Input, Button } from 'react-native';
import firebase from 'react-native-firebase'
import Modal from 'react-native-modal'
var ViewPort = Dimensions.get('window');
class CausesDetail extends Component {

    state = {
        isModalVisible: false
      };

      toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };


    goToProfile = () => {

    }


    render(){
        return (
            <View>
            <Modal isVisible={this.state.isModalVisible} style={{alignItems: 'center', width: "100%"}}>
            <View style={{ flex: 1, alignItems: 'center', marginTop: 200, borderRadius: 40 }}>

                
                
                <View style={{backgroundColor: 'white', height: 300, width: 320, flexDirection: 'row', borderRadius: 20}}>
                
                    <View style={{borderColor: 'blue', borderWidth: 2, borderRadius: 5, width: 100, height: 30, alignItems: "center", flexDirection: 'column'}}>
                        <TouchableOpacity onPress={this.toggleModal}>
                            <Text style={styles.textButton}>$5</Text>
                        </TouchableOpacity>
                    
                        <View>
                            <View style={{height: 100, marginTop: 3}}>
                            <Text style={styles.subText}>
                                With $5 donations, you get 10% off your next order at Zara.
                            </Text>
                            </View>
                            
                        </View>    
                    </View>

                    <View style={{borderColor: 'blue', borderWidth: 2, borderRadius: 5, width: 100, height: 30, alignItems: "center", flexDirection: 'column'}}>
                        <TouchableOpacity onPress={this.toggleModal}>
                            <Text style={styles.textButton}>$10</Text>
                        </TouchableOpacity>
                    
                        <View>
                        <View style={{height: 100, marginTop: 5}}>
                            <Text style={styles.subText}>
                                With $5 donations, you get 10% off your next order at Zara.
                            </Text>
                            </View>
                        </View>    
                    </View>


                    <View style={{borderColor: 'blue', borderWidth: 2, borderRadius: 5, width: 100, height: 30, alignItems: "center", flexDirection: 'column'}}>
                        <TouchableOpacity onPress={this.toggleModal}>
                            <Text style={styles.textButton}>$15</Text>
                        </TouchableOpacity>
                    
                        <View>
                        <View style={{height: 100}}>
                            <Text style={styles.subText}>
                                With $5 donations, you get 10% off your next order at Zara.
                            </Text>
                            </View>
                        </View>    
                    </View>

                </View>
            </View>
            </Modal>

            <ScrollView style={styles.mainView}>
                <View>
                    <TouchableOpacity>
                        <Image
                             source={{uri:'https://i.imgur.com/cshsoos.jpg'}}   
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
                        <Text style={{fontSize: 25, fontWeight: '800', padding: 10}}>Cause Information</Text>
                            <TouchableOpacity onPress={this.goToProfile}>
                            <View style={{padding: 10}}>
                                
                                <Image
                                    source={{uri:'https://i.imgur.com/qe0pHcf.jpg'}}
                                    
                                    style={{
                                        flex: 1,
                                        alignSelf: 'stretch',
                                        width: 70,
                                        resizeMode: 'cover',
                                        height: 70,
                                        borderRadius: 35,
                                    }}
                                    />
                                
                                <Text style={{fontSize: 16, fontWeight:'600'}}>United Way</Text>
                            </View>
                            </TouchableOpacity>
                            <View style={{width: '100%', backgroundColor:'rgba(214, 214, 214, 1)', height: 1, top: 15}}></View>
                            <Text style={styles.descriptionText}>Desctription</Text>
                            <Text style={styles.descriptionInfoText}>This is the post description that is the new thing</Text>

                            <View style={styles.actionButton}>
                                <TouchableOpacity style={{bottom: 100, alignItems: "center", width: '100%'}} onPress = {this.toggleModal}>
                                    <View style={styles.contactButtonView}>
                                        <Text style={styles.contactText}>Donate</Text>
                                    </View>
                                </TouchableOpacity>  
                            </View>
                    </View>
                </View>
                
            </ScrollView>
            </View>
            
        );
    }
}


const styles = StyleSheet.create({
    mainView: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
   },
   modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f7021a',
    padding: 100
 },
 text: {
    color: '#3f2949',
    marginTop: 10
 },
   titleText:{
    marginTop: 10,
    fontSize: 40,
    padding: 10,
    fontWeight:"700"
    },
    priceText:{
        paddingTop: 0,
        paddingLeft: 10,
        fontSize: 25,
    },
    descriptionText: {
        fontSize: 30,
        fontWeight: "700",
        top: 10,
        padding: 10
    },
    textButton:{
        fontSize: 20,
        color: 'blue',
        fontWeight: '700'
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
    editModal: {
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 20
      },
      submitBtn: {
        marginTop: 30,
        padding: 10,
        borderRadius: 20.0,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(32,81,164,1)'
      },
      subText:{
          fontSize: 10,
          color: 'red',
      }

});

export default CausesDetail;