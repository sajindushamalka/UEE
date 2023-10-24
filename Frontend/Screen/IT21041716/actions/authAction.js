import { authConstants } from './constants'
import axios from 'axios'
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';




// export const Login = (data) => {
//     console.log("action eke",data)
//     return async (dispatch) => {
//         // try {
//             dispatch({ type: authConstants.LOGIN_REQUEST })
//             console.log("hello")
//             const res = await axios.post('https://uee-backend-host.onrender.com/user/login', data)
//             console.log("hello1111")
//             if (res.status === 201) {
//                 const token = res.data.token
//                 const user = res.data.user

//                 await AsyncStorage.setItem("token", token)
//                 await AsyncStorage.setItem("user", JSON.stringify(user));

//                 Alert.alert(`Login Successfull, Welcome ${res.data.fullName}`)

//                 dispatch({
//                     type: authConstants.LOGIN_SUCCESS,
//                     payload: {
//                         user,
//                         token
//                     }
//                 })
//             } else if (res.status === 404) {
//                 dispatch({ type: authConstants.LOGIN_ERROR })
//                 Alert.alert("Password incorrect..!")
//             } else if (res.status === 401) {
//                 dispatch({ type: authConstants.LOGIN_ERROR })
//                 Alert.alert("No user under this email..!")
//             }
//         // } catch (error) {
//         //     Alert.alert("Somthing went wrong..!")
//         //     dispatch({ type: authConstants.LOGIN_ERROR })
//         // }
//     }
// }

// export const Login = (data) => {
//     return async (dispatch) => {
//         console.log("action eke", data);
//         dispatch({ type: authConstants.LOGIN_REQUEST });

//         try {
//             const response = await fetch('https://uee-backend-host.onrender.com/user/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const responseData = await response.json();
//             console.log(responseData.user);
//         } catch (error) {
//             console.error('Fetch error:', error.message);
//         }
//     };
// };


// // Sample data for the POST request
// const postData = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// };

// // Make a POST request using Axios
// axios.post('https://jsonplaceholder.typicode.com/posts', postData)
//     .then(response => {
//         // Handle the response data
//         console.log(response.data);
//     })
//     .catch(error => {
//         // Handle any errors
//         console.error('Error posting data', error);
//     });
