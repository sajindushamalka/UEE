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
    Platform,
    Alert
} from 'react-native';
import React, { useState, useEffect } from 'react';
import image from '../assets/gym4.jpg';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const PaymentHistory = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user);
    const [tableData, setTableData] = useState([])
    const form = {
        memberId: user.memberId
    }
    console.log(tableData)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post("http://192.168.8.160:8086/payment/getAll", form);
                if (res.status === 200) {
                    console.log("success");
                    setTableData(res.data.data)
                } else if (res.status === 400) {
                    console.log("error");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [user]);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor="orange" />
                <View style={styles.container}>
                    <View>
                        <ImageBackground source={image} style={styles.Image}>
                            <View
                                style={{ backgroundColor: "black", marginTop: 150, opacity: 0.85 }}
                            >
                                <Text style={styles.HeaderText}>Weekly Gym Allocations</Text>
                            </View>
                            <View
                                style={{ backgroundColor: "black", opacity: 0.75, height: 120 }}
                            >
                                <Text
                                    style={{ color: "white", textAlign: "center", padding: 10 }}
                                >
                                    Easily organize and track gym schedules for seamless operations, ensuring a hassle-free experience for both trainers and members.
                                </Text>
                            </View>
                        </ImageBackground>

                    </View>
                    <View style={styles.secondDiv}>

                        <View style={styles.dayContainer}>
                            <View style={styles.dayView}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, borderBottomWidth: 1, paddingBottom: 5 }}>
                                    <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'left' }}>No</Text>
                                    <Text style={{ flex: 2, fontWeight: 'bold', textAlign: 'left' }}>Date</Text>
                                    <Text style={{ flex: 2, fontWeight: 'bold', textAlign: 'left' }}>Amount</Text>
                                </View>
                                {
                                    tableData.map((data, index) => (
                                        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, borderBottomWidth: 1, paddingBottom: 5 }}>
                                            <Text style={{ flex: 1, textAlign: 'left' }}>{index + 1}</Text>
                                            <Text style={{ flex: 2, textAlign: 'left' }}>{data.lastDate}</Text>
                                            <Text style={{ flex: 2, textAlign: 'left' }}>Rs: {data.amount}.00</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    HeaderText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    secondDiv: {
        flex: 1,
        paddingVertical: 20,
    },
    dayContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayView: {
        width: '90%',
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#aaaaaa',
        padding: 20,
    },
    dayText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    dateTimeText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: 'orange',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    btnsend: {
        display: 'flex',
        backgroundColor: '#351fb4',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 20,
        width: 150,
        alignSelf: 'center',
    },
    dateTimePickerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateTimePicker: {
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

});
export default PaymentHistory