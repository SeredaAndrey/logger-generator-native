import { StyleSheet } from "react-native";

export const CyclesScreensStile = StyleSheet.create({
  formContainer: {
    marginHorizontal: 5,
  },
  formTitle: {
    marginTop: 8,
    color: "black",
    fontSize: 18,
    textTransform: "uppercase",
    fontFamily: "JuraReg",
    textAlign: "center",
  },
  deleteButton: {
    position: "absolute",
    right: 15,
    top: 50,
  },
  calculateTimeContainer: {
    padding: 0,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 100,
    // height: 50,
    borderWidth: 1,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
  },
  calculateTimeTitle: {
    color: "black",
    fontSize: 40,
    textTransform: "uppercase",
    fontFamily: "JuraReg",
    textAlign: "center",
  },
  formTitleData: {
    marginTop: 5,
    color: "black",
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: "JuraReg",
    textAlign: "center",
  },
  formDataInputBox: {
    marginTop: 5,
    marginHorizontal: 50,
    paddingHorizontal: 20,
    height: 32,

    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",

    fontFamily: "JuraReg",
  },
  button: {
    marginTop: 20,
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
  datePickerText: {
    textAlign: "center",
    alignItems: "center",

    backgroundColor: "#F6F6F6",

    fontFamily: "JuraReg",
  },
  checkbox: {
    marginTop: 5,
    alignItems: "center",
  },
});
