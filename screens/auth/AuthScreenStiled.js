import { StyleSheet } from "react-native";

export const authScreenStyled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#766A92",
  },
  title: {
    marginTop: 70,

    color: "#E4E4E4",
    textAlign: "center",
    textTransform: "uppercase",

    fontSize: 24,
    fontFamily: "JuraReg",
  },
  screenTitle: {
    marginTop: 300,

    color: "#E4E4E4",
    textAlign: "center",
    textTransform: "uppercase",

    fontSize: 20,
    fontFamily: "JuraReg",
  },
  inputForm: {
    marginTop: 16,

    justifyContent: "flex-start",
  },
  textInput: {
    height: 32,

    marginHorizontal: 30,
    paddingHorizontal: 20,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E8E8E8",

    fontFamily: "JuraReg",
  },
  buttonSecure: {
    position: "absolute",

    top: 5,
    right: 40,
  },
  buttonSecureTitle: {
    color: "#1B4371",

    fontSize: 16,
    fontFamily: "JuraReg",
  },
  button: {
    marginTop: 43,
    marginHorizontal: 60,

    height: 50,

    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FF6C00",
  },
  buttonTitle: {
    color: "#FFFFFF",

    fontSize: 20,
    textAlign: "center",
    fontFamily: "JuraReg",
  },
  imageBackgraund: {
    flex: 1,

    height: 300,

    justifyContent: "flex-end",
    alignItems: "center",
  },
  naviButon: {
    alignItems: "center",

    marginTop: 16,
    marginHorizontal: 30,
  },
  naviButonTitle: {
    color: "#1B4371",

    textAlign: "center",

    fontFamily: "JuraReg",
    fontSize: 16,
  },
});
