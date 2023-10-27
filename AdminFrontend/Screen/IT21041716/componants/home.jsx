import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import image from '../assets/gym5.jpg';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="orange" />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <ImageBackground source={image} style={styles.Image}>
              <View
                style={{ backgroundColor: "black", marginTop: 150, opacity: 0.85 }}
              >
                <Text style={styles.HeaderText}>MYFIT Gym App Admin Features</Text>
              </View>
              <View
                style={{ backgroundColor: "black", opacity: 0.75, height: 120 }}
              >
                <Text
                  style={{ color: "white", textAlign: "center", padding: 10 }}
                >
                  Efficiently manage schedules, track member activities, and oversee trainers with MYFIT Gym's comprehensive admin tools. Streamline operations and ensure a seamless fitness experience for all.
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.secondDiv}>

            <View style={styles.dayContainer}>
              <View style={styles.dayView}>
                <Text style={styles.dayText}>Effortless Member Registration</Text>
                <Text style={{ textAlign: 'center' }}>Simplify the registration process for new members with a user-friendly interface, capturing essential details seamlessly to ensure a hassle-free and swift onboarding experience for all.</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={styles.btn}>
                  <Text style={styles.btnText}>Visit</Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={styles.dayContainer}>
              <View style={styles.dayView}>
                <Text style={styles.dayText}>Streamlined Member Verification via QR Code</Text>
                <Text style={{ textAlign: 'center' }}>Enable smooth member verification using QR codes, facilitating quick access to member information and status, ensuring a secure and efficient check-in process for enhanced gym management.</Text>
                <TouchableOpacity onPress={() => navigation.navigate('QR Scan')} style={styles.btn}>
                  <Text style={styles.btnText}>Visit</Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={styles.dayContainer}>
              <View style={styles.dayView}>
                <Text style={styles.dayText}>Optimized Time Allocation Management System</Text>
                <Text style={{ textAlign: 'center' }}>Effectively manage and monitor allocated workout time for each member, allowing for fair and efficient facility usage while ensuring optimal scheduling and an enhanced workout experience for all MYFIT Gym members.</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Shedules')} style={styles.btn}>
                  <Text style={styles.btnText}>Visit</Text>
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  HeaderText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  secondDiv: {
    flex: 1,
    paddingVertical: 20,
  },
  dayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayView: {
    width: '90%',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#aaaaaa',
    padding: 20,
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center'
  },
  dayText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  btn: {
    width: 100,
    borderRadius: 4,
    backgroundColor: '#326A81',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 8,
  },
  btnText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default Home