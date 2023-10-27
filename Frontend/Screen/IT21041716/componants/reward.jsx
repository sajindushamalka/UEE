import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from 'react'
import image from '../assets/gym6.jpg'
import rewards from '../assets/rewards.png'
import { useSelector } from 'react-redux'


const Reward = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar backgroundColor="orange" />
        <View style={{ backgroundColor: "black", height: "100%" }}>
          <View>
            <ImageBackground source={image} style={style.Image}>
              <View
                style={{ backgroundColor: "black", marginTop: 150, opacity: 0.85 }}
              >
                <Text style={style.HeaderText}>Rewards</Text>
              </View>
              <View
                style={{ backgroundColor: "black", opacity: 0.75, height: 130 }}
              >
                <Text
                  style={{ color: "white", textAlign: "center", padding: 10 }}
                >
                  Get rewarded for your fitness milestones! Enjoy exclusive perks, from free sessions to premium gear discounts, as you progress on your fitness journey with us.
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={style.secondDiv}>

            <View style={style.imgContainer}>
              <Image
                style={style.imageStyle}
                source={rewards}
              />
              <Text style={{ marginTop: 25, fontSize: 60, fontWeight: 700, color: 'white' }}>{user.rewards}</Text>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  HeaderText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 10,
    marginTop: 10,
    textAlign: "center",
  },
  Image: {
    width: 385,
    height: 270,
    overflow: "hidden",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        shadowColor: "black",
      },
    }),
    resizeMode: "contain",
    backgroundColor: "black",
  },
  secondDiv: {
    // backgroundColor: '#ffffff',
    height: 350,
    width: '100%',
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
});
export default Reward