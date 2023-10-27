import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import logo1 from '../assets/myfit.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { memberRegister } from '../actions/authAction'

const NewMemeber = () => {
    const user = useSelector((state) => state.auth.user)
    const Gym = user.gymName;
    console.log(Gym)
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [address, setAddress] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [gymName, setGymName] = useState(Gym)
    const [referel, setReferel] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendData = () => {
        if (name === '') {
            Alert.alert("name required..!");
        } else if (mobileNo === '') {
            Alert.alert("Mobile number required..!");
        } else if (age === '') {
            Alert.alert("age required..!");
        } else if (height === '') {
            Alert.alert("height required..!");
        } else if (weight === '') {
            Alert.alert("weight required..!");
        } else if (gymName === '') {
            Alert.alert("Gym name required..!");
        } else if (address === '') {
            Alert.alert("Address required..!");
        } else if (email === '') {
            Alert.alert("email required..!");
        } else if (password === '') {
            Alert.alert("password required..!");
        } else if (password !== '' && email !== '' && mobileNo !== '' && age !== '' && height !== '' && weight !== '' && name !== '' && gymName !== '' && address !== '') {
            const form = {
                name: name,
                age: age,
                mobileNo: mobileNo,
                address: address,
                height: height,
                weight: weight,
                gymName: gymName,
                email: email,
                password: password,
            }

            dispatch(memberRegister(form))
            setAddress('')
            setGymName('')
            setHeight('')
            setWeight('')
            setAge('')
            setName('')
            setMobileNo('')
            setEmail('')
            setPassword('')
        }
    }
    return (
        <View style={styles.container}>
            <Image source={logo1} style={styles.logo} />
            <ScrollView style={{ width: "98%", marginLeft: 70 }}>
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
                        editable={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Age"
                        value={age}
                        onChangeText={(text) => setAge(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Height"
                        value={height}
                        onChangeText={(text) => setHeight(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Weight"
                        value={weight}
                        onChangeText={(text) => setWeight(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Referel"
                        value={referel}
                        onChangeText={(text) => setReferel(text)}
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
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
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
        width: 100,
        height: 100,
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
export default NewMemeber