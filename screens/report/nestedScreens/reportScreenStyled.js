import { StyleSheet } from "react-native";

export const ReportScreenStile = StyleSheet.create({
  itemContainer: {
    marginTop: 4,
    flexDirection: "column",
    backgroundColor: "rgb(217, 217, 217)",
    borderRadius: 10,
  },
  semiItemContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    marginLeft: 4,
    color: "black",
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: "JuraReg",
  },
  totalContainer: {
    marginTop: 5,
    backgroundColor: "rgb(217, 217, 217)",
    borderRadius: 10,
  },
  totalSemiContainer: {
    flexDirection: "row",
  },
  totalText: {
    marginLeft: 4,
    color: "black",
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: "JuraReg",
    textAlign: "center",
  },
  totalDataText: {
    marginLeft: 4,
    color: "black",
    fontSize: 18,
    textTransform: "uppercase",
    fontFamily: "JuraReg",
    textAlign: "center",
  },
  totalTextContainer: {
    flexDirection: "column",
    width: 180,
    justifyContent: "center",
  },
});
