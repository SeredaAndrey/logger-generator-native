import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

const AuthStack = createBottomTabNavigator();
const MainTab = createBottomTabNavigator();

import LogInScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import VerifyScreen from "./screens/auth/VerifyScreen";
import CalcData from "./screens/calculateData/calculateData";
import ReportScreen from "./screens/report/reportScreen";
import AddCycle from "./screens/report/cycle/addCycle";
import SettingsPage from "./screens/settings/settingScreen";

export function useRoute(isAuth) {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              return <AntDesign name="adduser" size={24} color="black" />;
            },
          }}
          name="register"
          component={RegisterScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              return <AntDesign name="mail" size={24} color="black" />;
            },
          }}
          name="verify"
          component={VerifyScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              return <AntDesign name="login" size={24} color="black" />;
            },
          }}
          name="login"
          component={LogInScreen}
        />
      </AuthStack.Navigator>
    );
  } else {
    return (
      <MainTab.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              return (
                <MaterialCommunityIcons
                  name="calculator-variant-outline"
                  size={32}
                  color="black"
                />
              );
            },
          }}
          name="CalcData"
          component={CalcData}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              return <FontAwesome5 name="list-alt" size={26} color="black" />;
            },
          }}
          name="report"
          component={ReportScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              return <MaterialIcons name="post-add" size={32} color="black" />;
            },
          }}
          name="newCycle"
          component={AddCycle}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              return <Feather name="settings" size={24} color="black" />;
            },
          }}
          name="settings"
          component={SettingsPage}
        />
      </MainTab.Navigator>
    );
  }
}
