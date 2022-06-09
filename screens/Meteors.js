import React, { Component } from 'react';
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
} from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";

import axios from 'axios';

export default class Meteors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meteors: {},
    };
  }

  getMeteors = () => {
    axios
      .get(
        'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=utdhB9Mb9RMcXVNIRDKn2Nl7TeTfZ990Dnw5gaUB'
      )
      .then((response) => {
        this.setState({
          meteors: response.data.near_earth_objects,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  componentDidMount() {
    this.getMeteors();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {
    let meteor = item;
    let image, speed, size;
    if (meteor.threat_score <= 8) {
      speed = require('../assets/meteor_speed1.gif');
      image = require('../assets/meteor_bg1.png');
      size = 100;
    } else if (meteor.threat_score <= 14) {
      speed = require('../assets/meteor_speed2.gif');
      image = require('../assets/meteor_bg2.png');
      size = 150;
    } else {
      speed = require('../assets/meteor_speed3.gif');
      image = require('../assets/meteor_bg3.png');
      size = 150;
    }

    return (
      <View>
        <ImageBackground source={image} style={styles.backgroundImage}>
          <Image source={speed} style={{ width: size, height: size }} />
          <View style={styles.meteorDataContainer}>
            <Text
              style={[styles.cardTitle, { marginTop: 400}]}>
              {item.name}
            </Text>
            <Text style={[styles.cardText, { marginTop: 20}]}>
              Closest to Earth -{' '}
              {item.close_approach_data[0].close_approach_date_full}
            </Text>
            <Text style={[styles.cardText, { marginTop: 5}]}>
              Minimum Diameter (KM) -{' '}
              {item.estimated_diameter.kilometers.estimated_diameter_min}
            </Text>
            <Text style={[styles.cardText, { marginTop: 5}]}>
              Maximum Diameter (KM) -{' '}
              {item.estimated_diameter.kilometers.estimated_diameter_max}
            </Text>
            <Text style={[styles.cardText, { marginTop: 5}]}>
              Velocity (KM/H) -{' '}
              {
                item.close_approach_data[0].relative_velocity
                  .kilometers_per_hour
              }
            </Text>
            <Text style={[styles.cardText, { marginTop: 5 }]}>
              Missing Earth by (KM) -{' '}
              {item.close_approach_data[0].miss_distance.kilometers}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  render() {
    if (Object.keys(this.state.meteors).length === 0) {
      return (
        <View>
          <SafeAreaView style={styles.driodSafeArea}>
            <Text>Loading</Text>
          </SafeAreaView>
        </View>
      );
    } else {
      var meteorsArray = Object.keys(this.state.meteors).map((meteor_date) => {
        return this.state.meteors[meteor_date];
      });
      let meteors = [].concat.apply([], meteorsArray);

      meteors.forEach(function (element) {
        let diameter =
          (element.estimated_diameter.kilometers.estimated_diameter_min +
            element.estimated_diameter.kilometers.estimated_diameter_max) /
          2;
        let threatScore =
          (diameter / element.close_approach_data[0].miss_distance.kilometers) *
          1000000000;

        element.threat_score = threatScore;
      });

      meteors.sort(function (a, b) {
        return b.threatScore - a.threatScore;
      });

      meteors = meteors.slice(0, 5);
      console.log(meteors);

      return (
        <View style={{ flex: 1 }}>
          <SafeAreaView style={styles.driodSafeArea} />
            <FlatList
              keyExtractor={this.keyExtractor}
              data={meteors}
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
  titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "white"
    },
    meteorContainer: {
        flex: 0.85
    },
    cardTitle: {
        fontSize: RFValue(20),
        marginBottom: 10,
        fontWeight: "bold",
        color: "white"
    },
    cardText: {
        color: "white",
        fontSize: RFValue(10)
    },
    threatDetector: {
        height: 10,
        marginBottom: 10
    },
    gifContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    meteorDataContainer: {
        justifyContent: "center",
        alignItems: "center",

    }
});