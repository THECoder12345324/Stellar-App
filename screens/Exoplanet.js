import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
  Animated
} from 'react-native';

import axios from 'axios';

const {width, height} = Dimensions.get("screen");

export default class Meteors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: {},
    };
  }

  getPlanets = () => {
    axios
      .get(
        'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_masse,ra,dec+from+ps+where+upper(soltype)+like+%27%CONF%%27+and+pl_masse+between+0.5+and+2.0&format=json'
      )
      .then((response) => {
        this.setState({
          planets: response.data
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  componentDidMount() {
    this.getPlanets();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {

    return (
      <View style={{width}}>
        <ImageBackground source={require("../assets/stars.gif")} style={styles.backgroundImage}>
          <View>
            <Text
              style={[styles.cardTitle, { marginTop: 400, marginLeft: 50 }]}>
              {item.pl_name}
            </Text>
            <Text style={[styles.cardText, { marginTop: 20, marginLeft: 50 }]}>
              Mass -{' '}
              {item.pl_masse} Earth Masses
            </Text>
            <Text style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}>
              Right Acension -{' '}
              {item.ra}
            </Text>
            <Text style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}>
              Declination -{' '}
              {item.dec}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  render() {
    if (Object.keys(this.state.planets).length === 0) {
      return (
        <View style={{flex: 1}}>
          <SafeAreaView style={styles.driodSafeArea} />
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#b19cd9"}}>
              <Text style={{flex: 1, justifyContent: "center"}}>Loading</Text>
            </View>
        </View>
      );
    } else {

      var planetsArray = Object.keys(this.state.planets).map((meteor_date) => {
        return this.state.planets[meteor_date];
      });
      let planets = [].concat.apply([], planetsArray);

      planets = planets.slice(0, 10);
      console.log(planets)

      return (
        <View style={{ flex: 1 }}>
          <SafeAreaView style={styles.driodSafeArea} />
            <FlatList
              keyExtractor={this.keyExtractor}
              data={planets}
              renderItem={this.renderItem}
              horizontal={true}
              pagingEnabled
            />
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
  cardTitle: {
      fontSize: 20,
      marginBottom: 10,
      fontWeight: "bold",
      color: "white"
  },
  cardText: {
      color: "white"
  },
});