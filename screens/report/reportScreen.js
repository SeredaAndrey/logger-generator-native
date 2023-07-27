import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Report from "./nestedScreens/reportScreen";
import PatchCycle from "./nestedScreens/patchCycle";

import { FormattedMessage } from "react-intl";

const NestedScreen = createNativeStackNavigator();

const ReportScreen = ({ navigation }) => {
  console.log("navigation: ", navigation);

  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="reportScreen"
        component={Report}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen
        name="patchCycle"
        component={PatchCycle}
        options={{ headerTitle: <FormattedMessage id="patch_cycle" /> }}
      />
    </NestedScreen.Navigator>
  );
};

export default ReportScreen;
