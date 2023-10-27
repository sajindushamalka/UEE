import React, { useEffect } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import myfit from '../assets/myfit.jpg'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
});


const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Image source={myfit} style={styles.logo} />
    </View>
  )
}

export default LandingPage 