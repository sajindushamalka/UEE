import { authConstants } from './constants'
import axios from 'axios'
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';

export const Login = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: authConstants.LOGIN_REQUEST })
            const res = await axios.post('http://192.168.8.160:8086/member/login', data)
            if (res.status === 201) {
                const token = res.data.token
                const user = res.data.user

                await AsyncStorage.setItem("token", token)
                await AsyncStorage.setItem("user", JSON.stringify(user));

                Alert.alert(`Login Successfull, Welcome ${res.data.fullName}`)

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




