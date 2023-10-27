import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import image from '../assets/myfit.jpg';
import { useSelector } from 'react-redux';

const MyAccount = () => {
    const user = useSelector((state) => state.auth.user);
    console.log(user)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileImageContainer}>
                        <Image style={styles.profileImage} source={image} />
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>{user.name}</Text>
                        <Text >{user.gymName}</Text>
            
                    </View>
                </View>
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.divcontainer}>
                    <View style={styles.form}>
                        <Text>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            value={user.name}
                            editable={false}
                        />
                        <Text>Member ID</Text>
                        <TextInput
                            style={styles.input}
                            value={user.memberId}
                            editable={false}
                        />
                        <Text>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={user.email}
                            editable={false}
                        />
                        <Text>Gym Name</Text>
                        <TextInput
                            style={styles.input}
                            value={user.gymName}
                            editable={false}
                        />
                        <Text>Mobile Number</Text>
                        <TextInput
                            style={styles.input}
                            value={user.mobileNo}
                            editable={false}
                        />
                        <Text>Address</Text>
                        <TextInput
                            style={styles.input}
                            value={user.address}
                            editable={false}
                        />
                        <Text>Payment Status</Text>
                        <TextInput
                            style={styles.input}
                            value={user.paymentStatus}
                            editable={false}
                        />
                        <Text>Age</Text>
                        <TextInput
                            style={styles.input}
                            value={user.age}
                            editable={false}
                        />
                        <Text>Height</Text>
                        <TextInput
                            style={styles.input}
                            value={user.height}
                            editable={false}
                        />
                        <Text>weight</Text>
                        <TextInput
                            style={styles.input}
                            value={user.weight}
                            editable={false}
                        />
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        marginBottom: 20,
        borderRadius: 5,
    },
    header: {
        width: '100%',
        height: 130,
        backgroundColor: '#faeef2',
        justifyContent: 'center',
    },
    profileContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,
    },
    form: {
        width: '80%',
    },
    profileImageContainer: {
        width: 80,
        height: 80,
        borderRadius: 50,
        overflow: 'hidden',
        marginLeft: 20,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    profileName: {
        marginTop: 20,
        fontSize: 28,
    },
    profileInfo: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    closeview: {
        padding: 20,
    },
    closeButton: {
        fontSize: 40,
        marginTop: -30,
    },
    logoutButton: {
        bottom: 20,
        backgroundColor: '#e74c3c',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 40
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    scrollView: {
        width: '100%',
        marginTop: 40,
        marginBottom: 40
    },
    divcontainer: {
        alignItems: 'center',
    },
});
export default MyAccount