import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import logo1 from '../assets/myfit.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { Register } from '../actions/authAction';
import { useNavigation } from '@react-navigation/native';

const UserRegiter = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [gymName, setGymName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendData = () => {
        if (name === '') {
            Alert.alert("name required..!");
        } else if (mobileNo === '') {
            Alert.alert("Mobile number required..!");
        } else if (gymName === '') {
            Alert.alert("Gym name required..!");
        } else if (address === '') {
            Alert.alert("Address required..!");
        } else if (email === '') {
            Alert.alert("email required..!");
        } else if (password === '') {
            Alert.alert("password required..!");
        } else if (password !== '' && email !== '' && mobileNo !== '' && name !== '' && gymName !== '' && address !== '') {
            const form = {
                name: name,
                mobileNo: mobileNo,
                gymName: gymName,
                address: address,
                email: email,
                password: password,
            }

            dispatch(Register(form))
            setAddress('')
            setGymName('')
            setName('')
            setMobileNo('')
            setEmail('')
            setPassword('')
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={logo1} style={styles.logo} />
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="FullName"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mobile Number"
                        value={mobileNo}
                        onChangeText={(text) => setMobileNo(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Gym Name"
                        value={gymName}
                        onChangeText={(text) => setGymName(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />

                    <TouchableOpacity onPress={sendData} style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={styles.newUser}>
                        <Text style={styles.newUserText}>Already registered?</Text>
                        <TouchableOpacity style={styles.registerLink} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.registerText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    logo: {
        width: 140,
        height: 140,
        marginBottom: 30,
        marginTop: 50
    },
    form: {
        width: '80%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        marginBottom: 20,
        borderRadius: 5,
    },
    button: {
        backgroundColor: 'blue',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    newUser: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
    newUserText: {
        marginRight: 5,
    },
    registerText: {
        color: 'blue',
        fontWeight: 'bold',
    },

});
export default UserRegiter