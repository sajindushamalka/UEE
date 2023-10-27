import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import logo from '../assets/myfit.jpg'
import { Login } from '../actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    logo: {
        width: 180,
        height: 180,
        marginBottom: 30,
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
    },
    newUserText: {
        marginRight: 5,
    },
    registerText: {
        color: 'blue',
        fontWeight: 'bold',
    },
    skipButton: {
        marginTop: 10,
    },
});

const UserLogin = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authenticated = useSelector((state) => state.auth.authenticated)

    const sendData = () => {
        if (email === '') {
            Alert.alert("Email required..!");
        } else if (password === '') {
            Alert.alert("Password required..!");
        } else if (password !== '' && email !== '') {

            const form = {
                email: email,
                password: password,
            }

            dispatch(Login(form))
            setEmail('')
            setPassword('')
        }
    }
    if (authenticated) {
        navigation.navigate('Main');
    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} />
                <TouchableOpacity onPress={() => sendData()} style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.newUser}>
                    <Text style={styles.newUserText}>New User?</Text>
                    <TouchableOpacity style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerText}>Create an account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default UserLogin