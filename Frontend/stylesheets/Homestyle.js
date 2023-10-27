import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    marginTop: 200,
    marginRight: 135,
    fontWeight: "bold",
    color: "white",
    // fontFamily: 'KeaniaOne-Regular',
  },
  text1: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 30,
    color: "white",
    marginLeft: 20,
    marginRight: 55,
    // fontFamily: 'KeaniaOne-Regular',
  },
  buttonContainer: {
    marginTop: 50,
    backgroundColor: "#FF8200",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 150,
    marginLeft: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    marginLeft: 27,
  },
  rectangle: {
    width: 400,
    marginTop: 60,
    height: 290,
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderWidth: 2,
    marginBottom: -40,
    marginTop: 30,
  },
  weekdayButtonsContainer: {
    marginTop: 20,
    marginBottom: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  weekdayButton: {
    marginLeft: 10,
    marginTop: 1,
    backgroundColor: "#FF8200",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  weekdayButtonText: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 1,
    color: "white",
    marginLeft: 83,
    marginRight: 55,
    // fontFamily: 'KeaniaOne-Regular',
  },
  text3: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: -53,
    color: "white",
    marginLeft: 50,
    marginRight: 55,
    // fontFamily: 'KeaniaOne-Regular',
  },
  selectedWeekdayButton: {
    backgroundColor: "red", // Change this to the desired color
    borderColor: "red",
  },
});
