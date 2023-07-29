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
    marginBottom: 200,
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
  filterContainer: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingHorizontal: 5,
    flexDirection: "column",
    backgroundColor: "rgb(217, 217, 217)",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  filterSemiContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  filterTitleText: {
    marginRight: 3,
    color: "black",
    fontSize: 11,
    textTransform: "lowercase",
    fontFamily: "JuraReg",
  },
  filterText: {
    color: "blue",
    fontSize: 14,
    fontWeight: "500",
    textTransform: "uppercase",
    fontFamily: "JuraReg",
  },
});
