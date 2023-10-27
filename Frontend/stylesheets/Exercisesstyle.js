import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button1: {
    height: 50,
    width: 250,
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 30,
    backgroundColor: "#FF8200",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  text: {
    fontSize: 28,
    color: "white",
    marginTop: 290,
  },
  text1: {
    fontSize: 28,
    color: "white",
    marginTop: 40,
    marginRight: 285,
    marginBottom: 10,
  },
  text2: {
    fontSize: 30,
    color: "white",
    marginTop: 10,
    marginRight: 280,
    marginBottom: 70,
    fontWeight: "bold",
  },
  scrollContainer: {
    flex: 8,
    marginBottom: 10,
  },
  button: {
    height: 50,
    width: 400,
    borderRadius: 30,
    marginLeft: 14,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWithMargin: {
    marginBottom: 8,
  },
  buttonText: {
    color: "black",
    fontSize: 17,
    paddingRight: 5,
    paddingLeft: 5,
    marginLeft: 0,
    alignContent: "flex-end",
    textAlign: "auto",
  },
});
