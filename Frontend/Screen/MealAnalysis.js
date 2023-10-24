import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  ScrollView,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native";
import React, { useEffect, useState } from "react";
const bgImage = require("../assets/meal.png");
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { LineChart } from "react-native-chart-kit";

// const data = {
//   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', "Sat", "Sun"],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99],
//       color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Color for the first line
//     },
//     {
//       data: [40, 60, 30, 70, 85],
//       color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Color for the second line
//     },
//   ],
// };

// const chartConfig = {
//   backgroundGradientFrom: '#fff',
//   backgroundGradientTo: '#fff',
//   color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//   strokeWidth: 2,
// };

const MealAnalysis = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [yourFood,setYourFood] = useState([]);

  const handleInputChange = (text) => {
    // Update your state with the new value
    setYourFood([...yourFood, text]);
  };


  const handeleBack = () => {
    navigation.navigate("NutritionPlanSelect");
  };
  const item = route.params.data;
  console.log(item);
  const foodCalories = item.map((food) => food.foodCalorie);
  const labels = item.map((food, index) => `Food ${index + 1}`);

  const data = {
    labels: labels,
    datasets: [
      {
        data: foodCalories,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Color for the line
      },
      {
        data: yourFood,
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Color for the second line
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="orange" />
      <View style={{ backgroundColor: "black", height: "100%" }}>
        <View>
          <ImageBackground source={bgImage} style={style.Image}>
            <View
              style={{ backgroundColor: "black", marginTop: 90, opacity: 0.8 }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  marginLeft: 10,
                  width: 40,
                  marginTop: 10,
                  height: 30,
                  borderRadius: 30,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={handeleBack}>
                  <Icon name="ios-arrow-back" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <Text style={style.HeaderText}>Analysis Your Plan</Text>
            </View>
            <View
              style={{ backgroundColor: "black", opacity: 0.7, height: 130 }}
            ></View>
          </ImageBackground>
        </View>
        <View style={style.secondDiv}>
          <ScrollView>
            <Text
              style={{
                textAlign: "center",
                paddingTop: 10,
                fontSize: 18,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Nutrition Package Details
            </Text>

            <View>
              <LineChart
                data={data}
                width={320}
                height={200}
                chartConfig={chartConfig}
              />
            </View>
            <View>
      <TextInput
        placeholder="Enter your food"
        onChangeText={handleInputChange}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
      />
    </View>
          </ScrollView>
        </View>
        <View
          style={{
            width: 100,
            marginLeft: 150,
            paddingTop: 20,
            borderRadius: 20,
          }}
        >
          <Button
            title="Active"
            color={"orange"}
            onPress={() => console.log("H")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MealAnalysis;

const style = StyleSheet.create({
  HeaderText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 10,
    marginTop: 10,
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
    height: 380,
    width: 350,
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 10,
    opacity: 0.8,
  },
  dayStyle: {
    backgroundColor: "orange",
    width: 100,
    height: 30,
    color: "white",
    marginLeft: 30,
    marginTop: 20,
    textAlign: "center",
    fontSize: 17,
  },
  nutriFood: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 30,
    marginTop: 10,
  },
});
