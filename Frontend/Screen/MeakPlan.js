import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  ScrollView,
  Button,
  TouchableOpacity 
} from "react-native";
import React, { useEffect, useState } from "react";
const bgImage = require("../assets/meal.png");
import axios from "axios";
import { useRoute } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'; 

const MealPlan = () => {
  const [plan, setPlan] = useState([""]);
  const [foods, setFoods] = useState([""]);
  const route = useRoute();
  const itemId = route.params.data.payload;
  const navigation = useNavigation();
  const [ususerID,setusUserID] = useState("651c69fd9a26a5742d859388");
  const [type,setType] = useState("7 Days");
  //console.log(itemId.nutritionPlanId);
  //console.log(itemId)
  const usNPlanID = itemId.nutritionPlanId;

  useEffect(() => {
    axios
      .get(`http://192.168.1.102:8086/week/one/${itemId.nutritionPlanId}`)
      .then((res) => {
        //console.log(res.data.payload);
        setPlan(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://192.168.1.102:8086/food/all")
      .then((res) => {
        //console.log(res.data);
        setFoods(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handeleBack = () => {
    navigation.navigate('NutritionPlanSelect');
  }

  const moveUserAccount = () => {
    const plan = {
      ususerID,
      usNPlanID,
      type
    }
    axios.post('http://192.168.1.102:8086/usnutition/add',plan).then((res)=>{
      console.log('plane selected')
    }).catch((err)=>{
      console.log("error in plan selecting")
    })
    navigation.navigate('MyMealPlan',{data:plan });
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="orange" />
      <View style={{ backgroundColor: "black", height: "100%" }}>
        <View>
          <ImageBackground source={bgImage} style={style.Image}>
            <View
              style={{ backgroundColor: "black", marginTop: 90, opacity: 0.8 }}
            >
              <View style={{backgroundColor:'white',marginLeft:10, width:40, marginTop:10, height:30, borderRadius:30, alignItems:'center'}}>
              <TouchableOpacity onPress={handeleBack}>
              <Icon name="ios-arrow-back" size={24} color="black" />
              </TouchableOpacity >
            </View>
              <Text style={style.HeaderText}>{plan.weekPlanName}</Text>
            </View>
            <View
              style={{ backgroundColor: "black", opacity: 0.7, height: 130 }}
            >
              <Text
                style={{ color: "white", textAlign: "justify", padding: 20 }}
              >
                Discover the Power of the 7-Day Target Achiever Meal: With this
                meal, you'll be on your way to success in no time. It's not only
                quick but also highly efficient, ensuring you reach your goals
                in just 7 days.
              </Text>
            </View>
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
            <View style={{flexDirection:'row'}}>
            <Text style={style.dayStyle}>Monday</Text>
            <View>
              {plan && plan.monday && plan.monday.length > 0 && foods.map((food, index) => (
                <View key={index} >
                  {plan.monday[1] == food._id || plan.monday[0] == food._id ? (
                    <Text style={style.nutriFood}>{food.foodName}</Text>
                  ) : null}
                </View>
              ))}
            </View>
            <View>
              {plan && plan.monday && plan.monday.length > 0 && foods.map((food, index) => (
                <View key={index} >
                  {plan.monday[1] == food._id || plan.monday[0] == food._id ? (
                    <Text style={style.nutriFood}>{food.foodCalorie} g</Text>
                  ) : null}
                </View>
              ))}
            </View>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={style.dayStyle}>Tuesday</Text>
            <View>
              {plan && plan.tuesday && plan.tuesday.length > 0 && foods.map((food, index) => (
                <View key={index} >
                  {plan.tuesday[1] == food._id || plan.tuesday[0] == food._id ? (
                    <Text style={style.nutriFood}>{food.foodName}</Text>
                  ) : null}
                </View>
              ))}
            </View>
            <View>
              {plan && plan.tuesday && plan.tuesday.length > 0 && foods.map((food, index) => (
                <View key={index} >
                  {plan.tuesday[1] == food._id || plan.tuesday[0] == food._id ? (
                    <Text style={style.nutriFood}>{food.foodCalorie} g</Text>
                  ) : null}
                </View>
              ))}
            </View>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={style.dayStyle}>Wednesday</Text>
            <View>
              {plan && plan.wednesday && plan.wednesday.length > 0 && foods.map((food, index) => (
                <View key={index} >
                  {plan.wednesday[1] == food._id || plan.wednesday[0] == food._id ? (
                    <Text style={style.nutriFood}>{food.foodName}</Text>
                  ) : null}
                </View>
              ))}
            </View>
            <View>
              {plan && plan.wednesday && plan.wednesday.length > 0 && foods.map((food, index) => (
                <View key={index} >
                  {plan.wednesday[1] == food._id || plan.wednesday[0] == food._id ? (
                    <Text style={style.nutriFood}>{food.foodCalorie} g</Text>
                  ) : null}
                </View>
              ))}
            </View>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={style.dayStyle}>Thursday</Text>
            <View>
              {plan && plan.thursday && plan.thursday.length > 0 && foods.map((food, index) => (
                <View key={index} >
                  {plan.thursday[1] == food._id || plan.thursday[0] == food._id ? (
                    <Text style={style.nutriFood}>{food.foodName}</Text>
                  ) : null}
                </View>
              ))}
            </View>
            <View>
              {plan && plan.thursday && plan.thursday.length > 0 && foods.map((food, index) => (
                <View key={index} >
                  {plan.thursday[1] == food._id || plan.thursday[0] == food._id ? (
                    <Text style={style.nutriFood}>{food.foodCalorie} g</Text>
                  ) : null}
                </View>
              ))}
            </View>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={style.dayStyle}>Friday</Text>
            <View>
              {plan && plan.friday && plan.friday.length > 0 && foods.map((food, index) => (
                <View key={index} >
                  {plan.friday[1] == food._id || plan.friday[0] == food._id ? (
                    <Text style={style.nutriFood}>{food.foodName}</Text>
                  ) : null}
                </View>
              ))}
            </View>
            <View>
              {plan && plan.friday && plan.friday.length > 0 && foods.map((food, index) => (
                <View key={index} >
                  {plan.friday[1] == food._id || plan.friday[0] == food._id ? (
                    <Text style={style.nutriFood}>{food.foodCalorie} g</Text>
                  ) : null}
                </View>
              ))}
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={style.dayStyle}>Saturday</Text>
            <View>
              {plan && plan.saturday && plan.saturday.length > 0 && foods.map((food, index) => (
                <View key={index} >
                  {plan.saturday[1] == food._id || plan.saturday[0] == food._id ? (
                    <Text style={style.nutriFood}>{food.foodName}</Text>
                  ) : null}
                </View>
              ))}
            </View>
            <View>
              {plan && plan.saturday && plan.saturday.length > 0 && foods.map((food, index) => (
                <View key={index} >
                  {plan.saturday[1] == food._id || plan.saturday[0] == food._id ? (
                    <Text style={style.nutriFood}>{food.foodCalorie} g</Text>
                  ) : null}
                </View>
              ))}
            </View>
            </View>


            <View style={{flexDirection:'row'}}>
            <Text style={style.dayStyle}>Sunday</Text>
            <View>
              {plan && plan.sunday && plan.sunday.length > 0 && foods.map((food, index) => (
                <View key={index} >
                  {plan.sunday[1] == food._id || plan.sunday[0] == food._id ? (
                    <Text style={style.nutriFood}>{food.foodName}</Text>
                  ) : null}
                </View>
              ))}
            </View>
            <View>
              {plan && plan.sunday && plan.sunday.length > 0 && foods.map((food, index) => (
                <View key={index} >
                  {plan.sunday[1] == food._id || plan.sunday[0] == food._id ? (
                    <Text style={style.nutriFood}>{food.foodCalorie} g</Text>
                  ) : null}
                </View>
              ))}
            </View>
            </View>
          </ScrollView>
        </View>
        <View style={{width:100, marginLeft:150, paddingTop:20, borderRadius:20}}>
        <Button title='Active' color={"orange"} onPress={()=>moveUserAccount()} />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default MealPlan;

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
    marginTop:10,
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
  nutriFood : {
    fontSize:16,
    fontWeight:'bold',
    paddingLeft:30,
    marginTop:10
  }
});
