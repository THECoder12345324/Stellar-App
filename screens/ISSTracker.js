import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
  ImageBackground,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { RFValue } from "react-native-responsive-fontsize";
import axios from 'axios';

export default class ISSLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {},
    };
  }

  componentDidMount() {
    this.getISSLocation();
  }

  getISSLocation = () => {
    axios
      .get('https://api.wheretheiss.at/v1/satellites/25544')
      .then((response) => {
        this.setState({ location: response.data });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  render() {
    if (Object.keys(this.state.location).length === 0) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <SafeAreaView style={styles.driodSafeArea} />
          <ImageBackground
            source={require('../assets/stars.gif')}
            style={styles.backgroundImage}>
            <Text style={styles.titleBar}>ISS Location</Text>
            <View style={{ flex: 0.7, marginTop: -30 }}>
              <MapView
                style={styles.map}
                region={{
                  latitude: this.state.location.latitude,
                  longitude: this.state.location.longitude,
                  latitudeDelta: 100,
                  longitudeDelta: 100,
                }}>
                <Marker
                  coordinate={{
                    longitude: this.state.location.longitude,
                    latitude: this.state.location.latitude,
                  }}>
                  <Image
                    source={require('../assets/iss_icon.png')}
                    style={{ height: 50, width: 50 }}
                  />
                </Marker>
              </MapView>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.info}>Latitude: {this.state.location.latitude}</Text>
              <Text style={styles.info}>Longitude: {this.state.location.longitude}</Text>
              <Text style={styles.info}>Altitude (KM): {this.state.location.altitude}</Text>
              <Text style={styles.info}>Velocity (KM/H): {this.state.location.velocity}</Text>
            </View>

          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  driodSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    color: 'white',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 60,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    backgroundColor: "white",
    flex: 0.3,
    padding: 30,
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  info: {
    color: "black",
    fontSize: RFValue(18),
    fontWeight: "bold",
    marginBottom: 3
  }
});
