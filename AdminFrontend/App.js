import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { isLoggedIn } from './Screen/IT21041716/actions/authAction';

//sithanga
import LandingPage from './Screen/IT21041716/componants/LandingPage ';
import Login from './Screen/IT21041716/componants/userLogin'
import Register from './Screen/IT21041716/componants/userRegiter'
import store from './Screen/IT21041716/stores/'

import ScanQR from './Screen/IT21041716/componants/ScanQR';
import NewMemeber from './Screen/IT21041716/componants/NewMemeber';
import AllocatedTimes from './Screen/IT21041716/componants/AllocatedTimes';
import Profile from './Screen/IT21041716/componants/profile'
import Home from './Screen/IT21041716/componants/home';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();



function App() {
  const [displayLogin, setDisplayLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplayLogin(true);
    }, 4000);
  }, []);


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {!displayLogin ? (
            <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


function MainScreen() {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated)

  useEffect(() => {
    if (!authenticated) {
      dispatch(isLoggedIn());
    }
  }, []);
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'orange',
        inactiveTintColor: '',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Fontisto name="home" size={25} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="QR Scan"
        component={ScanQR}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'qr-code-outline' : 'qr-code-outline'} size={25} color={color} />

          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Registration"
        component={NewMemeber}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'person-add-outline' : 'person-add-outline'} size={25} color={color} />

          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Shedules"
        component={AllocatedTimes}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'calendar-outline' : 'calendar-outline'} size={25} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'person-circle-outline' : 'person-circle-outline'} size={28} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default App;


