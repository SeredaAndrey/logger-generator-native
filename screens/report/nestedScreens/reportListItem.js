import { View, Text } from "react-native";

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import { ReportScreenStile } from "./reportScreenStyled";
import { TouchableOpacity } from "react-native";

const ReportListItem = ({ item, navigation }) => {
  const formatedDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} ${formattedTime}`;
  };
  const calculateTime = ({ time }) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("patchCycle", {
          item: item,
        });
      }}
      style={ReportScreenStile.itemContainer}
    >
      <View style={ReportScreenStile.semiItemContainer}>
        <Text style={ReportScreenStile.text}>
          {formatedDate(item.timestampStart)}
        </Text>
        <Text style={ReportScreenStile.text}>
          {formatedDate(item.timestampStop)}
        </Text>
        <MaterialCommunityIcons
          name="clock-time-ten-outline"
          size={24}
          color="black"
        />
        <Text style={ReportScreenStile.text}>
          {calculateTime({ time: item.workingTimeOfCycle })}
        </Text>
      </View>
      <View style={ReportScreenStile.semiItemContainer}>
        <MaterialCommunityIcons
          name="lightning-bolt-outline"
          size={24}
          color="black"
        />
        <Text style={ReportScreenStile.text}>
          {item.volumeElecricalGeneration
            ? `${item.volumeElecricalGeneration} kW`
            : "---"}
        </Text>
        <MaterialCommunityIcons name="gas-station" size={24} color="black" />
        <Text style={ReportScreenStile.text}>
          {item.refueling ? `${item.refueling} litre` : "---"}
        </Text>
        <MaterialCommunityIcons name="oil" size={24} color="black" />
        <Text style={ReportScreenStile.text}>
          {item.changeOil ? (
            <AntDesign name="check" size={24} color="black" />
          ) : (
            "---"
          )}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReportListItem;
