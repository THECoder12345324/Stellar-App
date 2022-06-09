import React, {Component} from 'react';

import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
const { width, height } = Dimensions.get('screen');

const data = [
  "https://i.pinimg.com/originals/4d/e4/30/4de430dde2298e5af2f8287318acf19f.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/150px-Indian_Space_Research_Organisation_Logo.svg.png",
  "https://i.pinimg.com/originals/c3/1f/29/c31f29b174fb5761e590fd31ab1a20c2.png",
  "https://i.pinimg.com/originals/a9/12/5b/a9125bb19b538cad0daf964b888c32b2.png"
]

const imageW = width * 0.8
const imageH = imageW



export default function Agencies () {

  const scrollX = React.useRef(new Animated.Value(0)).current;
  
    return(
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={[
          StyleSheet.absoluteFillObject
        ]}>
          {data.map((image, index) => {
            const inputRange=[
              (index - 1) * width,
              index * width,
              (index + 1) * width
            ]
            const opacity = scrollX.interpolate({
              inputRange, 
              outputRange: [0, 1, 0]
            })
            return <Animated.Image 
              key={`image-${index}`}
              source={{uri: image}}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  opacity
                }
              ]}
              blurRadius={40}
              />
          })}
        </View>
        <Animated.FlatList 
          data={data}
          keyExtractor={(_, index) => index.toString()}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            { useNativeDriver: true }
          )}
          horizontal
          pagingEnabled
          renderItem={({item}) => {
            return <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={{uri: item}} style={{
                width: imageW,
                height: imageH,
                resizeMode: "cover",
                borderRadius: 16
              }}/>
            </View>
          }}
        />
      </View>
    )

}

const styles = StyleSheet.create({

  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }

})