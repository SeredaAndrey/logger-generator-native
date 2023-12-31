import { StyleSheet } from "react-native";

export const SettingsScreenStile = StyleSheet.create({
  menuTitle: {
    marginTop: 6,
    marginLeft: 4,
    color: "black",
    fontSize: 18,
    textTransform: "uppercase",
    fontFamily: "JuraReg",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemTitle: {
    marginTop: 6,
    marginLeft: 10,
    color: "black",
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "JuraReg",
  },
  imageContainer: {
    alignItems: "center",
  },
  screenTitle: {
    marginTop: 6,
    color: "black",
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "JuraReg",
    textAlign: "center",
  },
  avatar: {
    marginTop: 6,
    marginBottom: 6,
    alignItems: "center",
    height: 200,
    width: 200,
    borderRadius: 10,
    alignContent: "center",
  },

  inputFormTitle: {
    marginLeft: 50,
    borderColor: "#E8E8E8",
    fontFamily: "JuraReg",
    fontSize: 12,
    textTransform: "lowercase",
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
    fontSize: 16,
  },
  inputFormWarning: {
    marginLeft: 50,
    borderColor: "#E8E8E8",
    fontFamily: "JuraReg",
    fontSize: 10,
    color: "red",
    textTransform: "lowercase",
  },
  radioContainer: {
    height: 32,
    marginHorizontal: 30,
    fontFamily: "JuraReg",
    fontSize: 14,
  },
  radioLabel: {
    fontFamily: "JuraReg",
    fontSize: 14,
  },
  button: {
    marginTop: 6,
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
  sendButtonUnactive: {
    marginTop: 6,
    marginHorizontal: 60,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
  },
  buttonTitleUnactive: {
    color: "#aaaaaa",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "JuraReg",
  },

  getPhotoContainer: {
    flex: 1,
  },
  camera: {
    // flex: 1,

    marginHorizontal: 20,
    height: 500,
    justifyContent: "center",
  },
  cameraButtonContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 100,
    height: 150,
    borderBottomWidth: 1,
    zIndex: 1,
  },
  logoutButton: {
    position: "absolute",
    right: 25,
    top: 200,
  },
});
