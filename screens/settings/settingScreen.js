import { Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FormattedMessage } from "react-intl";

import SettingsScreen from "./nestedScreens/settingsScreens";
import GeneratorSettingsScreen from "./nestedScreens/generatorSettings";
import UserSettingsScreen from "./nestedScreens/userSettingsScreen";
import TotalSettingsScreen from "./nestedScreens/totalSettings";

const NestedScreen = createNativeStackNavigator();

const SettingsPage = ({ navigation }) => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
        navigation={navigation}
      />
      <NestedScreen.Screen
        name="UserSettings"
        component={UserSettingsScreen}
        options={{ headerTitle: <FormattedMessage id="patch_cycle" /> }}
        navigation={navigation}
      />
      <NestedScreen.Screen
        name="GenSettings"
        component={GeneratorSettingsScreen}
        options={{ headerTitle: <FormattedMessage id="patch_cycle" /> }}
        navigation={navigation}
      />
      <NestedScreen.Screen
        name="TotalSettings"
        component={TotalSettingsScreen}
        options={{ headerTitle: <FormattedMessage id="patch_cycle" /> }}
        navigation={navigation}
      />
    </NestedScreen.Navigator>
  );
};

export default SettingsPage;
