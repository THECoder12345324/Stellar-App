import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Platform, StatusBar, SafeAreaView, ImageBackgrounda, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Starmap extends Component {
    constructor() {
        super()
        this.state = {
            longitude: '',
            latitude: ''
        }

    }
    render() {
        const { longitude, latitude } = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return (
            <View style={{ flex: 1, backgroundColor: "#1a0023" }}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={{ flex: 0.29, marginTop: 20, alignItems: 'center' }}>
                <Text 
                 style={styles.titleText}
                >Star Map</Text>

                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter your longitude"
                        placeholderTextColor="white"
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            this.setState({
                                longitude: text
                            })
                        }}
                    />

                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter your latitude"
                        placeholderTextColor="white"
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            this.setState({
                                latitude: text
                            })
                        }}
                    />
                </View>
                <WebView
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={{ marginTop: 35, marginBottom: 0, }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 18,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'white',
        width: 200
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
})