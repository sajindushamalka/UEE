import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import logo from '../assets/myfit.jpg'

const userRegiter = () => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} />
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} />
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} />
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} />
                
                <TouchableOpacity onPress={sendData} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
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
});
export default userRegiter