import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { FormattedMessage } from "react-intl";
import { useNavigation } from "@react-navigation/native";

import AppBar from "../../appBar/appBar";
import { SettingsScreenStile } from "./settingScreensStyled";

import { Feather } from "@expo/vector-icons";

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <AppBar />
      <Text style={SettingsScreenStile.menuTitle}>
        <FormattedMessage id="settings" />
      </Text>
      <TouchableOpacity
        style={SettingsScreenStile.itemContainer}
        onPress={() => navigation.navigate("UserSettings")}
      >
        <Text style={SettingsScreenStile.itemTitle}>
          <FormattedMessage id="user_settings" />
        </Text>
        <Feather name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={SettingsScreenStile.itemContainer}
        onPress={() => navigation.navigate("TotalSettings")}
      >
        <Text style={SettingsScreenStile.itemTitle}>
          <FormattedMessage id="global_settings" />
        </Text>
        <Feather name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={SettingsScreenStile.itemContainer}
        onPress={() => navigation.navigate("GenSettings")}
      >
        <Text style={SettingsScreenStile.itemTitle}>
          <FormattedMessage id="gen_settings" />
        </Text>
        <Feather name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
