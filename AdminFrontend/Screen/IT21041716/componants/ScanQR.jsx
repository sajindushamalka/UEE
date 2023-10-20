import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground, TouchableOpacity, ScrollView, Button, Platform, } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import image from '../assets/gym2.jpg';


const ScanQR = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scanned')

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
        console.log('Type: ' + type + '\nData: ' + data)
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

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="orange" />
            <View style={{ backgroundColor: "white", height: "100vh", paddingVertical: 10 }}>

                <Text style={style.HeaderText}>Validate Membership</Text>

                <View style={style.secondDiv}>
                    <ScrollView style={{ height: '100vh' }}>
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
                            <Text style={style.maintext}>{text}</Text>
                            {/* details */}
                            <Text style={{ fontWeight: '700', fontSize: 25, marginTop: 25 }}>Details</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, borderBottomWidth: 1, paddingBottom: 5 }}>
                                <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>No</Text>
                                <Text style={{ flex: 2, fontWeight: 'bold', textAlign: 'center' }}>Date</Text>
                                <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>Amount</Text>
                            </View>

                            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                                <Text style={{ flex: 1, textAlign: 'center' }}>{rowData.id}</Text>
                                <Text style={{ flex: 2, textAlign: 'center' }}>{rowData.date}</Text>
                                <Text style={{ flex: 1, textAlign: 'center' }}>{rowData.amount}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
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
        fontSize: 16,
        margin: 20,
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