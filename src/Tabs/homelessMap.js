import React, {Component} from 'react';
import {  AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    Image,
    Dimensions,
   } from 'react-native';
import MapView from 'react-native-maps';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const Images = [
  { uri: "https://i.imgur.com/nt8VqPO.jpg" },
  { uri: "https://i.imgur.com/wC4SqZO.jpg" },
  { uri: "https://i.imgur.com/cshsoos.jpg" },
  { uri: "https://i.imgur.com/ACwsNUo.jpg" },
  { uri: "https://i.imgur.com/PJAREIX.png"}
]


  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const CARD_HEIGHT = height / 4;
  const CARD_WIDTH = CARD_HEIGHT - 50;






class homelessMap extends Component {
    //43.649994, -79.379611

    index;
    animation;
  
    constructor(props){
      super(props);
   
      this.state = {
        markers: [
          {
            coordinate: {
              latitude: 43.649994,
              longitude: -79.380342,
            },
            title: "School TRIP",
            description: "We require $500 to fund our",
            image: Images[0],
          },
          {
            coordinate: {
              latitude: 43.649819,
              longitude: -79.383055,
            },
            title: "HIPPY KNEE SURGERY",
            description: "HIPPY THE DOG BROKE HIS KNEE AND NEEDS A SURGERY",
            image: Images[1],
          },
          {
            coordinate: {
              latitude: 43.644538,
              longitude: -79.384675,
            },
            title: "United Way",
            description: "WE ARE UNTIEDSAD ASDASD ",
            image: Images[4],
          },
          {
            coordinate: {
              latitude: 43.653410,
              longitude: -79.378106,
            },
            title: "Help Steve",
            description: "Steve is homeless and he requires",
            image: Images[2],
          },
          {
            coordinate: {
              latitude: 43.647733,
              longitude: -79.372426,
            },
            title: "Austin Chemo Therapy",
            description: "Austin has been diagnosed with lung",
            image: Images[3],
          },
        ],
        region: {
          latitude: 43.647702,
          longitude: -79.380342,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        },
      };


   }
   
   componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }

  

  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>

        <ActionButton buttonColor="rgba(231,76,60,1)" offsetY={50} verticalOrientation="down">
          <ActionButton.Item buttonColor='#9b59b6' title="Community" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-home" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Medical" onPress={() => {}}>
            <Icon name="md-medical" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Others" onPress={() => {}}>
            <Icon name="md-menufold" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>

      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: "100%",
        height: "100%"
    },
    scrollView: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    endPadding: {
      paddingRight: width - CARD_WIDTH,
    },
    card: {
      padding: 10,
      elevation: 2,
      backgroundColor: "#FFF",
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
      overflow: "hidden",
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    textContent: {
      flex: 1,
    },
    cardtitle: {
      fontSize: 12,
      marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
    },
    marker: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgba(130,4,150, 0.9)",
    },
    ring: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: "rgba(130,4,150, 0.3)",
      position: "absolute",
      borderWidth: 1,
      borderColor: "rgba(130,4,150, 0.5)",
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
    
  
});

   


export default homelessMap;