import DropdownComponent from "./dropdowncomponents/dropdown1"; // Adjust the import path as needed
import DropdownComponent1 from "./dropdowncomponents/dropdown2";
import { useNavigation } from "@react-navigation/native";
import Radio from "./radiobutton";
import { styles } from "../stylesheets/Homestyle";
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import User from "./User";

import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const Home = () => {
  const navigation = useNavigation();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [selectedDays, setSelectedDays] = useState([]); // State to track selected days

  const toggleDaySelection = (day) => {
    if (selectedDays.includes(day)) {
      // If the day is already selected, remove it
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      // If the day is not selected, add it
      setSelectedDays([...selectedDays, day]);
    }
  };

  const renderWeekday = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.weekdayButton,
        selectedDays.includes(item) && styles.selectedWeekdayButton, // Apply selected style
      ]}
      onPress={() => toggleDaySelection(item)}
    >
      <Text style={styles.weekdayButtonText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./image/firstpage_image.jpg")}
        style={styles.imageBackground}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Exercise Plan</Text>
          <Text style={styles.text1}>
            Exercise is an essential component of a healthy lifestyle. Regular
            physical activity offers a wide range of physical, mental, and
            emotional benefits. First and foremost, exercise helps to maintain
            and improve physical fitness. It strengthens muscles, enhances
            cardiovascular health, and promotes flexibility.
          </Text>

          <View style={styles.rectangle}>
            <DropdownComponent />
            <DropdownComponent1 />

            <Text style={styles.text2}>Enter your Hight and Weight</Text>

            <FlatList
              data={weekdays}
              renderItem={renderWeekday}
              keyExtractor={(item) => item}
              horizontal
              contentContainerStyle={styles.weekdayButtonsContainer}
            />
          </View>
          <Text style={styles.text3}>Select the Date/dates</Text>
          <Radio />

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate("Days", { selectedDays }); // Pass selected days to Exercises
            }}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
