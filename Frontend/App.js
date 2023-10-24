import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import store from './Screen/IT21041716/stores/index.js';
import { Provider } from 'react-redux';


import Footer from './Screen/Footer';
import NutritionPlanSelect from './Screen/NutritionPlanSelect';
import MealPlan from './Screen/MeakPlan';
import MyMealPlan from './Screen/MyMealPlan';
import MonthlyMealPlan from './Screen/monthlyMealPlan';
import TreeMonthMealPlan from './Screen/treeMonthMealPlan';
import MealAnalysis from './Screen/MealAnalysis';


//sithanga
import LandingPage from './Screen/IT21041716/componants/LandingPage ';
import Login from './Screen/IT21041716/componants/userLogin'
import Profile from './Screen/IT21041716/componants/profile'
import Rewards from './Screen/IT21041716/componants/reward'
import QR from './Screen/IT21041716/componants/qr'
import Member from './Screen/IT21041716/componants/RenewMembership'
import TimeTable from './Screen/IT21041716/componants/timeTable';
import PaymentHistory from './Screen/IT21041716/componants/PaymentHistory';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='NutritionPlanSelect' component={NutritionPlanSelect} options={{ headerShown: false }} />
      <Stack.Screen name='MealPlan' component={MealPlan} options={{ headerShown: false }} />
      <Stack.Screen name='MonthlyMealPlan' component={MonthlyMealPlan} options={{ headerShown: false }} />
      <Stack.Screen name='TreeMonthMealPlan' component={TreeMonthMealPlan} options={{ headerShown: false }} />
      <Stack.Screen name='MyMealPlan' component={MyMealPlan} options={{ headerShown: false }} />
      <Stack.Screen name='MealAnalysis' component={MealAnalysis} options={{ headerShown: false }} />
      <Stack.Screen name='Rewards' component={Rewards} options={{ headerShown: false }} />
      <Stack.Screen name='QR' component={QR} options={{ headerShown: false }} />
      <Stack.Screen name='Member' component={Member} options={{ headerShown: false }} />
      <Stack.Screen name='TimeTable' component={TimeTable} options={{ headerShown: false }} />
      <Stack.Screen name='PaymentHistory' component={PaymentHistory} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


function MainScreen() {
  return (
    <NavigationContainer> 
      {/* <Tab.Navigator barStyle={{backgroundColor:'orange'}}  >
        <Tab.Screen
          name="Home"
          component={MainStack}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={size} color={color} />
            ),
            headerShown:false
          }}
        />
        <Tab.Screen
          name="Settings"
          component={MainStack}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'ios-settings' : 'ios-settings-outline'} size={size} color={color} />
            ),
            headerShown:false
          }}
        />
      </Tab.Navigator>
    </NavigationContainer> */}
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'orange',
        inactiveTintColor: '',
      }}>
      <Tab.Screen
        name="Home"
        component={MainStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Fontisto name="home" size={25} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={MainStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'ios-settings' : 'ios-settings-outline'} size={25} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tutorial"
        component={NutritionPlanSelect}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="video-camera" size={25} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="photo"
        component={MainStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="photo" size={25} color={color} />
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
   </NavigationContainer>
  );
}

function App() {
  const [displayLogin, setDisplayLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplayLogin(true);
    }, 2000);
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
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

export default App;


