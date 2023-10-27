import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { styles } from "../stylesheets/Exercisesstyle";
import { useNavigation } from "@react-navigation/native";

const exercises = {
  Sun: [
    "Hammer curl              3reps|12/10/s       30sec",
    "Barbell curl             3reps|12/10/s       30sec",
    "Spider curl              3reps|12/10/s       30sec",
    "Incline dumbbell curl    3reps|12/10/s       30sec",
    "Reverse barbell curl     3reps|12/10/s       30sec",
    "Overhead cable curl      3reps|12/10/s       30sec",
    "Drag curl                3reps|12/10/s       30sec",
    "Barbell Bicep Curl       3reps|12/10/s       30sec",
    "Preacher Curl            3reps|12/10/s       30sec",
  ],
  Mon: [
    "Lying triceps extension   3reps|12/10/s       30sec",
    "Weighted bench dip        3reps|12/10/s       30sec",
    "Tricep dips               3reps|12/10/s       30sec",
    "Overhead Triceps          3reps|12/10/s       30sec",
    "Close grip bench press    3reps|12/10/s       30sec",
    "TRX tricep extension      3reps|12/10/s       30sec",
  ],
  Tue: [
    "Front press        3reps|12/10/s       30sec",
    "Back press         3reps|12/10/s       30sec",
    "Face pull down     3reps|12/10/s       30sec",
    "Arnold press       3reps|12/10/s       30sec",
  ],
  Wed: [
    "Flat bench press       3reps|12/10/s         30sec",
    "Dumbbell bench press   3reps|12/10/s         30sec",
    "Incline bench press    3reps|12/10/s         30sec",
    "Cable flys             3reps|12/10/s         30sec",
  ],
  Thu: [
    "Leg press            3reps|12/10/s          30sec",
    "Leg curl             3reps|12/10/s          30sec",
    "Leg extensions       3reps|12/10/s          30sec",
    "Full squat           3reps|12/10/s          30sec",
  ],
  Fri: [
    "Flat bench press        3reps|12/10/s            30sec",
    "Dumbbell bench press    3reps|12/10/s        30sec",
    "Leg extensions          3reps|12/10/s            30sec",
    "Full squat              3reps|12/10/s            30sec",
  ],
  Sat: [
    "Incline bench press       3reps|12/10/s      30sec",
    "Cable flys                3reps|12/10/s      30sec",
    "Close grip bench press    3reps|12/10/s      30sec",
    "TRX tricep extension      3reps|12/10/s      30sec",
  ],
};

const getRandomExercises = (category, count) => {
  const categoryExercises = exercises[category];
  const selectedExercises = [];

  while (selectedExercises.length < count) {
    const randomIndex = Math.floor(Math.random() * categoryExercises.length);
    const exercise = categoryExercises[randomIndex];

    if (!selectedExercises.includes(exercise)) {
      selectedExercises.push(exercise);
    }
  }

  return selectedExercises;
};

const Exercises = ({ route }) => {
  const navigation = useNavigation();
  const selectedDays = route?.params?.selectedDays || [];

  if (selectedDays.length === 0) {
    return (
      <View>
        <Text>No days selected.</Text>
      </View>
    );
  }
  const clearSelectedDays = () => {
    // Navigate to the "Home" screen and clear the selected days
    navigation.reset({
      index: 0,
      routes: [{ name: "home1", params: { selectedDays: [] } }],
    });
  };
  return (
    <ImageBackground
      source={require("./image/secondpage_image.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Your BMI is...</Text>
        <TouchableOpacity style={styles.button1} onPress={clearSelectedDays}>
          <Text style={styles.buttonText}>Select New Days</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {selectedDays.map((day, index) => (
          <View key={index}>
            <Text style={styles.text1}>{`Day ${index + 1}`}</Text>
            {getRandomExercises(day, 4).map((exercise, exerciseIndex) => (
              <TouchableOpacity
                key={exerciseIndex}
                style={[styles.button, styles.buttonWithMargin]}
                onPress={() =>
                  navigation.navigate("Tutorial1", { exerciseName: exercise })
                }
              >
                <Text style={styles.buttonText}>{exercise}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default Exercises;
