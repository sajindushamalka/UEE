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
import React, { useState } from 'react';
import image from '../assets/gym5.jpg';
import { Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';



const TimeTable = () => {
    const [dateAndTime, setDateandTime] = useState([]);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [count, setCount] = useState(0)


    const onChange = (event, selectedDate) => {
        setDate(selectedDate)
        setShow(false)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showToast = (message) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            Alert.alert(message);
        }
    };

    const selectTime = (text) => {
        setCount(count + 1)
        if (count < 6) {
            const updatedDateAndTime = [...dateAndTime, text];
            setDateandTime(updatedDateAndTime);
        } else {
            showToast('You can only select 7 dates per week..!');
        }

    }

    return (
        <SafeAreaView style={styles.container}>
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
                    <ScrollView>
                        <View style={styles.dayContainer}>
                            <View style={styles.dayView}>
                                <Text style={styles.dayText}>DAY {count + 1}</Text>
                                <Text style={styles.dateTimeText}>{date.toLocaleString()}</Text>
                                <View style={styles.buttonContainer}>
                                    <Button mode="contained" onPress={() => showMode('date')} style={styles.button}>
                                        Select Date
                                    </Button>
                                </View>
                                <View style={styles.buttonContainer}>
                                    <Button mode="contained" onPress={() => showMode('time')} style={styles.button}>
                                        Select Time
                                    </Button>
                                </View>
                                {show && (
                                    <View style={styles.dateTimePickerContainer}>
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            value={date}
                                            mode={mode}
                                            is24Hour={true}
                                            onChange={onChange}
                                            style={styles.dateTimePicker}
                                        />
                                    </View>
                                )}
                                <Button onPress={() => selectTime(date.toLocaleString())} style={styles.btnsend}> <Text style={{ color: 'white' }}>Set Date</Text></Button>
                            </View>
                            <View style={styles.dayView}>
                                <Text style={styles.dayText}>Allocated Time Shedule</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, borderBottomWidth: 1, paddingBottom: 5 }}>
                                    <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'left' }}>No</Text>
                                    <Text style={{ flex: 2, fontWeight: 'bold', textAlign: 'left' }}>Date & Time</Text>
                                </View>
                                {dateAndTime.map((rowData, index) => (
                                    <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, borderBottomWidth: 1, paddingBottom: 5 }}>
                                        <Text style={{ flex: 1, textAlign: 'left' }}>{index + 1}</Text>
                                        <Text style={{ flex: 2, textAlign: 'left' }}>{rowData}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

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
export default TimeTable;
