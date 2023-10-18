import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import React, { useState } from "react";
const bgImage = require("../assets/meal.png");
import SelectDropdown from "react-native-select-dropdown";
import axios from "axios";
import {useNavigation} from '@react-navigation/native'
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const NutritionPlanSelect = () => {
  const mealPlans = ["Grain Weight", "Lose Weight", "Healthy Meal"];
  const mealDurations = ["7 Days", "1 Month", "3 Months"];
  const [plan, setPlan] = useState("");
  const [duration, setDuration] = useState("");
  const navigation = useNavigation();

const displayValues = () =>{
  const ePlan = {
    plan,
    duration
  }
  //console.log(plan,duration);
  axios.post('http://192.168.1.102:8086/nutrition/search',ePlan).then((res)=>{
   // console.log(res.data);
   console.log(plan)
   if(duration == '7 Days'){
    navigation.navigate('MealPlan',{data:res.data} );
   }else if(duration == '1 Month'){
    navigation.navigate('MonthlyMealPlan',{data:res.data} );
   }else if(duration == '3 Months'){
    navigation.navigate('TreeMonthMealPlan',{data:res.data} );
   }
    
  }).catch((err)=>{
    console.log(err);
  })
}

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="orange"/>
    <View style={{ backgroundColor: "black" ,padding:10, height:'100%'}}>
      <View style={{ shadowColor: "white" }}>
        <ImageBackground source={bgImage} style={style.Image}>
          <View style={{ padding: 20, alignItems: "center" }}>
            <Text style={style.HeaderText}>Nutrition Plans</Text>
          </View>
        </ImageBackground>
        <View style={{ padding: 20 }}>
          <Text style={{ color: "white", textAlign: "justify" }}>
            "Prioritizing nutrition is essential for everyone's well-being. In
            the box below, you have the opportunity to tailor your nutrition
            plan to your specific needs. Simply choose your desired plan and
            specify the duration, and we will craft the perfect nutrition meals
            just for you."
          </Text>
        </View>
        <View style={style.whiteBox}>
          <Text style={{ fontSize: 20, marginRight: 150, paddingBottom: 10 }}>
            Select Plan :{" "}
          </Text>
          <SelectDropdown
            data={mealPlans}
            onSelect={(selectedItem, index) => {
              // console.log(selectedItem, index);
              setPlan(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
          <Text
            style={{
              fontSize: 20,
              marginRight: 150,
              paddingBottom: 10,
              paddingTop: 10,
            }}
          >
            Durations :{" "}
          </Text>
          <SelectDropdown
            data={mealDurations}
            onSelect={(selectedItem, index) => {
              // console.log(selectedItem, index);
              setDuration(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
          <View style={{padding:20}}>
          <Button title='Search' color={"orange"}  onPress={()=>displayValues()}/>
          </View>
          
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default NutritionPlanSelect;

const style = StyleSheet.create({
  Image: {
    width: 370,
    height: 230,
    borderRadius: 30,
    overflow: "hidden",
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        shadowColor: "black",
      },
    }),
  },
  HeaderText: {
    backgroundColor: "black",
    color: "orange",
    fontWeight: "bold",
    width: 230,
    textAlign: "center",
    height: 40,
    fontSize: 30,
    borderRadius: 10,
    elevation: 100,
    shadowColor: "white",
  },
  whiteBox:{
    backgroundColor: "#A6ACAF",
    alignItems: "center",
    borderRadius: 20,
    width: 350,
    display: "flex",
    justifyContent: "center",
    marginLeft: 10,
    padding: 20,
    elevation:30,
    borderWidth:2,
    borderColor:'orange'
  }
});
