import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, StatusBar, ImageBackground, TouchableOpacity, ScrollView, Button, Platform, } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';


const ScanQR = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scanned')
    const [memberId, setMemberId] = useState('')

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    // Request Camera Permission
    useEffect(() => {
        askForCameraPermission();
    }, []);


    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data)
    };


    if (hasPermission === null) {
        return (
            <View style={style.container}>
                <Text>Requesting for camera permission</Text>
            </View>)
    }
    if (hasPermission === false) {
        return (
            <View style={style.container}>
                <Text style={{ margin: 10 }}>No access to camera</Text>
                <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
            </View>)
    }

    //attendence
    const checkAttendence = () => {
        const date = new Date();
        console.log(date)
        const form = {
            memberId: memberId,
            dateAndTime: date
        }
        try {
            const res = axios.post("http://192.168.8.160:8086/timetable/check", form)
            if (res.status === 200 || res.status === 404) {
                Alert.alert("Attendence marked..!")
            }
        } catch (error) {
            Alert.alert("Somthing went wrong..!")
        }

    }

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="orange" />
            <View style={{ backgroundColor: "white", paddingVertical: 10 }}>

                <Text style={style.HeaderText}>Validate Membership</Text>

                <ScrollView style={{ marginBottom: 100 }}>
                    <View style={style.secondDiv}>
                        <View style={style.container}>
                            <View style={style.barcodebox}>
                                <BarCodeScanner
                                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                                    style={{ height: 400, width: 400 }} />
                            </View>
                            {scanned && (
                                <TouchableOpacity onPress={() => setScanned(false)} style={style.btn}>
                                    <Text style={style.btnText}>Scan me</Text>
                                </TouchableOpacity>
                            )}
                            <View style={{ backgroundColor: '#e3e3e3', width: '80%', borderRadius: 30, marginVertical: 20 }}>
                                <Text style={style.maintext}>{text}</Text>
                            </View>
                            <TextInput
                                style={style.input}
                                placeholder="Member ID"
                                value={memberId}
                                onChangeText={(text) => setMemberId(text)
                                }
                            />
                            <TouchableOpacity onPress={() => checkAttendence()} style={style.btn}>
                                <Text style={style.btnText}>Mark Attendence</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    HeaderText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 30,
        marginLeft: 10,
        marginTop: 10,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        marginBottom: 20,
        borderRadius: 5,
        width: "70%"
    },
    secondDiv: {
        backgroundColor: '#ffffff',
        height: '100%',
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

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    maintext: {
        fontSize: 20,
        margin: 20,
        letterSpacing: 1.8
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
    },
    btn: {
        width: 200,
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


export default ScanQR