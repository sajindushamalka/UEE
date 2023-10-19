import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    StatusBar,
    ImageBackground,
    ScrollView,
    TextInput,
    TouchableOpacity
} from "react-native";
import React, { useState } from 'react'
import image from '../assets/cash.jpeg'


const RenewMembership = () => {
    const [amount, setAmount] = useState('1800.00')
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');

    const sendData = () => {

    }
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="orange" />
            <View style={{ backgroundColor: "black", height: "100%" }}>
                <View>
                    <ImageBackground source={image} style={style.Image}>
                        <View
                            style={{ backgroundColor: "black", marginTop: 150, opacity: 0.85 }}
                        >
                            <Text style={style.HeaderText}>Renew Anytime, Anywhere</Text>
                        </View>
                        <View
                            style={{ backgroundColor: "black", opacity: 0.75, height: 130 }}
                        >
                            <Text
                                style={{ color: "white", textAlign: "center", padding: 10 }}
                            >
                                Renew your membership effortlessly with our convenient online gateway, ensuring uninterrupted access to our premium fitness facilities and exclusive benefits.
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={style.secondDiv}>
                    <ScrollView style={{ marginBottom: 50 }}>
                        <View style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                            <View style={style.textContainer}>
                                <Text style={style.textStyle}>Monthly Membership Fee: $50</Text>
                            </View>
                            <View style={style.textContainer}>
                                <Text style={style.textStyle}>Rewards Points: 1000</Text>
                            </View>
                            <View style={style.textContainer}>
                                <Text style={style.textStyle}>Total Payable: $30</Text>
                            </View>
                        </View>



                        <View style={style.centeredView}>
                            <View style={style.modalView}>
                                <Text style={{ fontWeight: 700, fontSize: 22 }}>Pay Here</Text>
                                <TextInput
                                    style={style.input}
                                    placeholder="Amount"
                                    value={amount}
                                    editable={false}
                                />
                                <TextInput
                                    style={style.input}
                                    placeholder="Cardholder Name"
                                    value={cardholderName}
                                    onChangeText={(text) => setCardholderName(text)}
                                />
                                <TextInput
                                    style={style.input}
                                    placeholder="Card Number"
                                    value={cardNumber}
                                    onChangeText={(text) => setCardNumber(text)}
                                />
                                <TextInput
                                    style={style.input}
                                    placeholder="Expiry"
                                    value={expiry}
                                    onChangeText={(text) => setExpiry(text)}
                                />
                                <TextInput
                                    style={style.input}
                                    placeholder="CVV"
                                    value={cvv}
                                    onChangeText={(text) => setCvv(text)}
                                />
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        style={{ ...style.openButton, backgroundColor: '#2196F3' }}
                                        onPress={() => {
                                            sendData();
                                        }}
                                    >
                                        <Text style={style.textStyle}>Recharge</Text>
                                    </TouchableOpacity>
                                </View>
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
        paddingBottom: 30
    },
    imgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        width: 250,
        height: 250,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 10,
        width: 300,
        height: 430,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 8,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },
    input: {
        height: 40,
        width: 250,
        margin: 10,
        borderWidth: 1,
        padding: 10,
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    textContainer: {
        marginVertical: 10,
    },
    textStyle: {
        fontSize: 26,
        fontWeight: 800,
        color: 'white'
    },
});

export default RenewMembership