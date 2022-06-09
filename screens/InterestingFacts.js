import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet, Alert, Platform, StatusBar, SafeAreaView, Linking, ScrollView } from 'react-native';

export default class InterestingFacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apod: []
        };
    }

    render() {
      return (
          <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                  <View style={{ flex: 0.15, justifyContent: "center", textAlign: "center" }}>
                      <Text style={styles.routeText}>Cool Facts</Text>
                  </View>
                  <ScrollView style={styles.listContainer}>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>1. Our Milky Way Galaxy is 105,000 light years across</Text>
                      </View>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>2. 79 known moons orbit Jupiter</Text>
                      </View>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>3. The sun completes one full rotation every 25-35 days</Text>
                      </View>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>4. Pluto is smaller than the United States</Text>
                      </View>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>5. According to mathematics, white holes are possible</Text>
                      </View>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>6. Pluto's largest moon, Charon, is the half the size of Pluto</Text>
                      </View>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>7. We know more about Mars and the Moon than we do about our own oceans</Text>
                      </View>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>8. If you were driving at 75 MPH, it would take you 258 days to drive around Saturn's rings</Text>
                      </View>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>9. Outer Space is only 62 miles away</Text>
                      </View>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>10. The International Space Station circles Earth every 92 minutes</Text>
                      </View>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>11. There are three types of galaxies: Elliptical, Spiral, and Irregular</Text>
                      </View>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>12. On Venus, it snows metal and rains sulfuric acid</Text>
                      </View>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>13. Space is completely silent</Text>
                      </View>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>14. Astronauts can grow approximately 2 inches in height while in space</Text>
                      </View>
                      <View style={{ padding: 20 }}>
                          <Text style={styles.explanationText}>15. The moon is moving away from Earth at a rate of 4cm per year</Text>
                      </View>
                  </ScrollView>
              </ImageBackground>
          </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#ec63ff",
    },
    explanationText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginTop: 10,
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.55)',
        flex: 0.8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",

    },
    homeButton: {
      position: 'absolute',
      height: 40,
      width: 40,
      margin: 10
    },
    homeButtonImage: {
      height: 40,
      width: 40
    }
});