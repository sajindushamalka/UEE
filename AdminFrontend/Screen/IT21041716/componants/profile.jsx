import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import image from '../assets/myfit.jpg';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Profile = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.auth.user);
  const handleLogout = () => {
    Alert.alert("Logout successful..!");
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image style={styles.profileImage} source={image} />
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

      <ScrollView style={styles.scrollView}>
        <View style={styles.divcontainer}>
          <View style={styles.form}>
            <Text>Full Name</Text>
            <TextInput
              style={styles.input}
              value={user.name}
              editable={false}
            />
            <Text>Admin ID</Text>
            <TextInput
              style={styles.input}
              value={user.adminId}
              editable={false}
            />
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              value={user.email}
              editable={false}
            />
            <Text>Gym Name</Text>
            <TextInput
              style={styles.input}
              value={user.gymName}
              editable={false}
            />
            <Text>Mobile Number</Text>
            <TextInput
              style={styles.input}
              value={user.mobileNo}
              editable={false}
            />
            <Text>Address</Text>
            <TextInput
              style={styles.input}
              value={user.address}
              editable={false}
            />
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView >
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 20,
    borderRadius: 5,
  },
  header: {
    width: '100%',
    height: 130,
    backgroundColor: '#faeef2',
    justifyContent: 'center',
  },
  profileContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  form: {
    width: '80%',
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: 'hidden',
    marginLeft: 20,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileName: {
    marginTop: 20,
    fontSize: 24,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeview: {
    padding: 20,
  },
  closeButton: {
    fontSize: 40,
    marginTop: -30,
  },
  logoutButton: {
    bottom: 20,
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 40
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  scrollView: {
    width: '100%',
    marginTop: 40,
    marginBottom: 40
  },
  divcontainer: {
    alignItems: 'center',
  },
});

export default Profile;
