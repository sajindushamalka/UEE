import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  ScrollView,
  Button
} from "react-native";
import React, { useEffect, useState } from "react";
const bgImage = require("../assets/meal.png");
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import {useNavigation} from '@react-navigation/native'

const MyMealPlan = () => {
  const currentDate = new Date();
  const dayOfWeekNumber = currentDate.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[dayOfWeekNumber];
  const route = useRoute();
  const item = route.params.data;
  const itemId = route.params.data.usNPlanID;
  const type = route.params.data.type;

  const [meal, setMeal] = useState([]);
  const [food, setFood] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    if (type === "7 Days") {
      axios
        .get(`http://192.168.1.102:8086/week/one/${itemId}`)
        .then((res) => {
          if (currentDay === "Wednesday") {
            setMeal(res.data.payload.Wednesday);
          } else if (currentDay === "Monday") {
            setMeal(res.data.payload.Monday);
          } else if (currentDay === "Tuesday") {
            setMeal(res.data.payload.Tuesday);
          } else if (currentDay === "Thursday") {
            setMeal(res.data.payload.Thursday);
          } else if (currentDay === "Friday") {
            setMeal(res.data.payload.Friday);
          } else if (currentDay === "Saturday") {
            setMeal(res.data.payload.Saturday);
          } else if (currentDay === "Sunday") {
            setMeal(res.data.payload.Sunday);
          }
          return meal;
        })
        .then((mealData) => {
          // Create an array of promises for axios requests
          const foodRequests = mealData.map((ml) =>
            axios.get(`http://192.168.1.102:8086/food/one/${ml}`)
          );

          // Use Promise.all to wait for all requests to complete
          Promise.all(foodRequests)
            .then((responses) => {
              // Extract the payload from each response and set the food state
              const foods = responses.map((res) => res.data.payload);
              setFood(foods);
            })
            .catch((err) => {
              console.log("Error in food requests", err);
            });
        })
        .catch((err) => {
          console.log("Error in meal request", err);
        });
    }else if(type == "1 Month"){
      axios
      .get(`http://192.168.1.102:8086/month/one/${itemId}`)
      .then((res) => {
        console.log(res.data.payload)
        setMeal(res.data.payload.springOne);
        return meal;
      })
      .then((mealData) => {
        // Create an array of promises for axios requests
        const foodRequests = mealData.map((ml) =>
          axios.get(`http://192.168.1.102:8086/food/one/${ml}`)
        );

        // Use Promise.all to wait for all requests to complete
        Promise.all(foodRequests)
          .then((responses) => {
            // Extract the payload from each response and set the food state
            const foods = responses.map((res) => res.data.payload);
            setFood(foods);
          })
          .catch((err) => {
            console.log("Error in food requests", err);
          });
      })
      .catch((err) => {
        console.log("Error in meal request", err);
      });
    }else if(type == "3 Months"){
      axios
      .get(`http://192.168.1.102:8086/tree/one/${itemId}`)
      .then((res) => {
        console.log(res.data.payload)
        setMeal(res.data.payload.springOne);
        return meal;
      })
      .then((mealData) => {
        // Create an array of promises for axios requests
        const foodRequests = mealData.map((ml) =>
          axios.get(`http://192.168.1.102:8086/food/one/${ml}`)
        );

        // Use Promise.all to wait for all requests to complete
        Promise.all(foodRequests)
          .then((responses) => {
            // Extract the payload from each response and set the food state
            const foods = responses.map((res) => res.data.payload);
            setFood(foods);
          })
          .catch((err) => {
            console.log("Error in food requests", err);
          });
      })
      .catch((err) => {
        console.log("Error in meal request", err);
      });
    }
  },[meal]);


  const handleNect = () => {
    navigation.navigate('MealAnalysis',{data:food});
  }


  return (
    <SafeAreaView>
      <StatusBar backgroundColor="orange" />
      <View style={{ backgroundColor: "black", height: "100%" }}>
        <View>
          <ImageBackground source={bgImage} style={style.Image}>
            <View
              style={{ backgroundColor: "black", marginTop: 120, opacity: 0.8 }}
            >
              <Text style={style.HeaderText}>Your Plan</Text>
            </View>
            <View
              style={{ backgroundColor: "black", opacity: 0.7, height: 130 }}
            >
              <Text
                style={{ color: "white", textAlign: "justify", padding: 10 }}
              >
                Start your day with a nutritious breakfast to fuel your energy.
                Remember to update your meal log after each meal. Start your day
                with a nutritious breakfast to fuel your energy. Remember to
                update your meal.
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={style.secondDiv}>
          <ScrollView>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                paddingTop: 10,
                fontWeight: "bold",
              }}
            >
              Today is {currentDay} Your Plan
            </Text>
            <View style={{padding:30}}>
            {food.map((f, index) => (
              <View key={index} style={{padding:5, }}>
                 <Text style={{fontSize:17,backgroundColor:'white', padding:10 }}>Food Name - {f.foodName}</Text>
                <Text style={{padding:10}}>Calorie Rate - {f.foodCalorie} cal</Text>
              </View>
            ))}
            </View>
          </ScrollView>
        </View>
        <View style={{width:100, marginLeft:150, paddingTop:20, borderRadius:20}}>
          <Button title='Analysis' color={"orange"} onPress={()=>handleNect()} />
          </View>
      </View>
    </SafeAreaView>
  );
};

export default MyMealPlan;

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
    backgroundColor: "white",
    height: 350,
    width: 350,
    borderRadius: 20,
    marginLeft: 20,
    opacity: 0.8,
  },
});
