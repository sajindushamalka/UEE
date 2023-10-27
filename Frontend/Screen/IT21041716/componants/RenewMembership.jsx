import {
    StyleSheet,
    Text,
    View,
    Alert,
    SafeAreaView,
    StatusBar,
    ImageBackground,
    ScrollView,
    TextInput,
    TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from 'react'
import image from '../assets/cash.jpeg'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { authConstants } from "../actions/constants";


const RenewMembership = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user);
    const [subTotal, setSubTotal] = useState(2500.00)
    const [amount, setAmount] = useState('')
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');


    useEffect(() => {
        const finalAmount = subTotal - user.rewards;
        setAmount(finalAmount);
    }, [subTotal, user.rewards]);


    const sendData = async () => {
        if (cardholderName === '') {
            Alert.alert("Card holder name is required..!");
        } else if (cardNumber === '') {
            Alert.alert("Card Number is required..!");
        } else if (expiry === '') {
            Alert.alert("Expiry is required..!");
        } else if (cvv === '') {
            Alert.alert("CVV is required..!");
        } else if (cardholderName !== '' && cardNumber !== '' && expiry !== '' && cvv !== '') {
            const form = {
                email: user.email,
                memberId: user.memberId,
                name: user.name,
                amount: amount,
                rewards: user.rewards,
                gymName: user.gymName
            };

            try {
                dispatch({ type: authConstants.PAYMENT_REQUEST })
                const res = await axios.post("http://192.168.8.160:8086/payment/newPayment", form);
                if (res.status === 201) {


                    Alert.alert("Payment successful..!");
                    setCardholderName('')
                    setCardNumber('')
                    setExpiry('')
                    setCvv('')
                    console.log(res)
                    dispatch({
                        type: authConstants.PAYMENT_SUCCESS,
                        payload: res.data
                    })
                } else if (res.status === 400) {
                    dispatch({ type: authConstants.PAYMENT_ERROR })
                    Alert.alert("Something went wrong..!");
                }
            } catch (error) {
                Alert.alert("Something went wrong..!");
                dispatch({ type: authConstants.PAYMENT_ERROR })
                console.error(error);
            }
        }

    };
    return (
        <SafeAreaView>
            <ScrollView >
                <View style={{ backgroundColor: "black" }}>
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

                        <View style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                            <View style={style.textContainer}>
                                <Text style={style.textStyle}>Monthly Membership Fee: Rs:{subTotal}.00 </Text>
                            </View>
                            <View style={style.textContainer}>
                                <Text style={style.textStyle}>Rewards Points: {user.rewards}</Text>
                            </View>
                            <View style={style.textContainer}>
                                <Text style={style.textStyle}>Total Payable: Rs:{amount}.00</Text>
                            </View>
                        </View>



                        <View style={style.centeredView}>
                            <View style={style.modalView}>
                                <Text style={{ fontWeight: 700, fontSize: 22 }}>Pay Here</Text>
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


                    </View>
                </View>
            </ScrollView>
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