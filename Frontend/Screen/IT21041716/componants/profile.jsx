import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import image from '../assets/myfit.jpg'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'


const Profile = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.auth.user)
  console.log(user)

  const handleLogout = () => {
    Alert.alert("Logout successful..!");
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              source={image}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{user.name}</Text>
            <View style={styles.closeview}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                <Text style={styles.closeButton}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.navigationContainer}>
        <View style={styles.navMid}>
          <Ionicons name='qr-code-outline' size={26} color="black" />
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('QR')}>
            <Text style={styles.navigationButtonText}>Check My QR Code</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.navMid}>
          <Ionicons name='wallet-outline' size={26} color="black" />
          <TouchableOpacity onPress={() => navigation.navigate('Rewards')} style={styles.navigationButton} >
            <Text style={styles.navigationButtonText}>Rewards</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.navMid}>
          <Ionicons name='barbell-outline' size={26} color="black" />
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('Member')}>
            <Text style={styles.navigationButtonText}>Renew Membership</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.navMid}>
          <Ionicons name='calendar-outline' size={26} color="black" />
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('TimeTable')}>
            <Text style={styles.navigationButtonText}>Time Table</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.navMid}>
          <Ionicons name='calculator-outline' size={26} color="black" />
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('PaymentHistory')}>
            <Text style={styles.navigationButtonText}>Membership History</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.navMid}>
          <Ionicons name='people-outline' size={26} color="black" />
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('MyAccount')}>
            <Text style={styles.navigationButtonText}>My Account</Text>
          </TouchableOpacity>
        </View>

      </View>


      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 130,
    backgroundColor: '#faeef2',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', // Add this line
    paddingRight: 20, // Add this line

  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: 'hidden',
    marginLeft: 20
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileName: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 600,
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'row', // Add this line
    alignItems: 'center', // Add this line
  },
  closeview: {
    padding: 20,
  },
  closeButton: {
    fontSize: 40,
    marginTop: -30

  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  navigationContainer: {
    marginTop: 10,
    flexDirection: 'colums',
    width: '80%',
  },
  navigationButton: {
    marginLeft: 10,
  },
  navigationButtonText: {
    fontSize: 24,
    marginLeft: 20
  },
  navMid: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18
  }
});



export default Profile