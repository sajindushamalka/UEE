// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
// import NutritionPlanSelect from './Screen/NutritionPlanSelect';

// export default function App() {
//   return (
//     <SafeAreaView>
//     <View style={{backgroundColor:'black', height:'auto',paddingTop:50, padding:10}}>
//       <StatusBar backgroundColor='orange'/>
//      <NutritionPlanSelect />
//     <Text style={{color:'white'}}>BBBB</Text>
//     </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// import Footer from './Screen/Footer';
// import NutritionPlanSelect from './Screen/NutritionPlanSelect';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <Stack.Navigator>
      
//       <Stack.Screen name='NutritionPlanSelect' component={NutritionPlanSelect} options={{headerShown:false}}/>
//       {/* <Stack.Screen name='Footer' component={Footer} options={{headerShown:false}}/> */}
      
//     </Stack.Navigator>
    
//   )
// }

// export default () => {
//   return (
//     <NavigationContainer>
//       <App/>
//       <Tab.Navigator>
//       <Tab.Screen name="Home" component={NutritionPlanSelect} />
//       <Tab.Screen name="Settings" component={NutritionPlanSelect} />
//     </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// import Footer from './Screen/Footer';
// import NutritionPlanSelect from './Screen/NutritionPlanSelect';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// // Create a Stack Navigator for your main screens
// function MainStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='NutritionPlanSelect' component={NutritionPlanSelect} options={{ headerShown: false }} />
//       {/* Add more screens here */}
//     </Stack.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       {/* Use the MainStack as the default navigator */}
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={MainStack} options={{headerShown:false}}/>
//         {/* Add more tabs here */}
//         <Tab.Screen name="Settings" component={MainStack} options={{headerShown:false}}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Footer from './Screen/Footer';
import NutritionPlanSelect from './Screen/NutritionPlanSelect';
import MealPlan from './Screen/MeakPlan';
import MyMealPlan from './Screen/MyMealPlan';
import MonthlyMealPlan from './Screen/monthlyMealPlan';
import TreeMonthMealPlan from './Screen/treeMonthMealPlan';

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
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer> 
      <Tab.Navigator barStyle={{backgroundColor:'orange'}}>
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
    </NavigationContainer>
  );
}

export default App;
