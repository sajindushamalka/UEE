import { authConstants } from './constants'
import axios from 'axios'
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: authConstants.LOGIN_REQUEST })
            const res = await axios.post('http://192.168.8.160:8086/member/login', data)
            if (res.status === 201) {
                const token = res.data.token
                const user = res.data.user

                AsyncStorage.setItem("token", token);
                AsyncStorage.setItem("user", JSON.stringify(user));

                Alert.alert(`Login Successfull, Welcome ${res.data.user.name}`)

                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: {
                        user,
                        token
                    }
                })
            } else if (res.status === 404) {
                dispatch({ type: authConstants.LOGIN_ERROR })
                Alert.alert("Password incorrect..!")
            } else if (res.status === 401) {
                dispatch({ type: authConstants.LOGIN_ERROR })
                Alert.alert("No user under this email..!")
            }
        } catch (error) {
            Alert.alert("Somthing went wrong..!")
            dispatch({ type: authConstants.LOGIN_ERROR })
        }
    }
}


export const isLoggedIn = () => {
    return async (dispatch) => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            const userData = await AsyncStorage.getItem('user');
            const user = JSON.parse(userData);
            if (user) {
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: {
                        token,
                        user
                    }
                });
            }
        } else {
            dispatch({
                type: authConstants.LOGOUT_FAILED,
                payload: { error: 'Failed to login' }
            });
        }
    };
};



