import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require('../assets/stars.gif')}
            style={styles.backgroundImage}>
            <View style={styles.titleBar}>
              <Image
                source={require('../assets/main-icon.png')}
                style={{ width: 150, height: 150 }}></Image>
              <Text style={styles.titleText}>Stellar</Text>
              <Text style={styles.titleTextB}>App</Text>
            </View>
            <TouchableOpacity style={styles.routeCard} onPress={() => {
              this.props.navigation.navigate("Spacecraft")
            }}>
              <Text style={styles.routeText}>Spacecraft</Text>
              <Image source={require('../assets/space_crafts.png')} style={styles.routeImage}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Star Map")
                    }>
                    <Text style={styles.routeText}>Star Map</Text>
                    <Image source={require("../assets/star_map.png")} style={styles.routeImage}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Daily Picture")
                    }>
                <Text style={styles.routeText}>Daily Picture</Text>
                <Image source={require("../assets/daily_pictures.png")} style={styles.routeImage}></Image>
            </TouchableOpacity>
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  titleTextB: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "white"
  },
  routeText: {
        fontSize: 25,
        margin: 10,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center"
  },
  routeImage: {
        position: "absolute",
        top: -20,
        right: -15,
        height: 70,
        width: 70,
        resizeMode: "contain"
  }
});
