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
import image from '../assets/gym2.jpg'
import QRCode from 'react-native-qrcode-svg';
import { useSelector } from 'react-redux'


const QR = () => {

  const user = useSelector((state) => state.auth.user);

  const userDetails = {
    memberId: user.memberId,
    gymName: user.gymName,
    name: user.name,
    age: user.age,
    address: user.address,
    height: user.height,
    weight: user.weight,
    mobileNo: user.mobileNo,
    email: user.email,
    paymentStatus: user.paymentStatus,
    rewards: user.rewards,
  };

  const userDetailsString = JSON.stringify(userDetails);


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
                <Text style={style.HeaderText}>Scan Me QR</Text>
              </View>
              <View
                style={{ backgroundColor: "black", opacity: 0.75, height: 130 }}
              >
                <Text
                  style={{ color: "white", textAlign: "center", padding: 10 }}
                >
                  Say hello to our convenient QR code system! Easily access the gym and enjoy a hassle-free workout experience tailored to your fitness needs and goals.
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={style.secondDiv}>

            <View style={style.imgContainer}>
              <QRCode
                value={userDetailsString}
                size={200}
                backgroundColor='black'
                color='white' />
              <Text style={{ fontSize: 30, fontWeight: 700, color: 'white', marginTop: 30 }}>SCAN ME</Text>
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
    paddingBottom: 30,
    marginTop: 20,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70
  },
  imageStyle: {
    width: 250,
    height: 250,
  },
});

export default QR