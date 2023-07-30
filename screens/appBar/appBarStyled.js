import { StyleSheet } from "react-native";

export const AppBarStyles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    height: 70,
    backgroundColor: "#766A92",
  },
  logoContainer: {
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  picture: {
    width: 50,
    height: 50,
  },
  avatarContainer: {
    marginLeft: "auto",
    marginRight: 5,
  },
  avatar: {
    width: 50,
    borderRadius: 10,
    height: 50,
  },
  title: {
    marginLeft: 10,
    color: "#E4E4E4",
    fontSize: 18,
    textTransform: "uppercase",
    fontFamily: "JuraReg",
  },
});
