import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Feather } from "@expo/vector-icons";

import {
  View,
  Text,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { authScreenStyled } from "./AuthScreenStiled";
import { register } from "../../redux/auth/authOperations";

const initAuthState = {
  email: "",
  password: "",
};

export default function RegisterScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initAuthState);
  const [dimensions, setDimentions] = useState(Dimensions.get("window").width);
  const [securePassword, setSecurePassword] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const onChangeSize = () => {
      setDimentions(Dimensions.get("window").width);
    };
    Dimensions.addEventListener("change", onChangeSize);
    return () => {
      Dimensions.removeEventListener("change", onChangeSize);
    };
  }, []);

  const hidenKeyboard = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  const onSubmit = () => {
    dispatch(register(state));
    setState(initAuthState);
    hidenKeyboard();
    navigation.navigate("verify");
  };

  return (
    <View style={authScreenStyled.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          hidenKeyboard();
        }}
      >
        <KeyboardAvoidingView>
          <View
            style={{
              paddingBottom: isShowKeyboard ? 32 : 144,
              height: isShowKeyboard ? 250 : 490,
              width: dimensions,
            }}
          >
            <Text style={authScreenStyled.title}>PowerGen Tracker</Text>
            <ImageBackground
              source={require("../../pictures/logo-generators.png")}
              style={{
                ...authScreenStyled.imageBackgraund,
                height: isShowKeyboard ? 150 : 300,
              }}
              resizeMode="contain"
            ></ImageBackground>
            <Text
              style={{
                ...authScreenStyled.screenTitle,
                marginTop: isShowKeyboard ? 150 : 300,
              }}
            >
              REGISTRATION
            </Text>
            <View style={authScreenStyled.inputForm}>
              <TextInput
                style={{ ...authScreenStyled.textInput, marginTop: 0 }}
                placeholder="E-MAIL"
                placeholderTextColor={"#BDBDBD"}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
              />
            </View>
            <View style={authScreenStyled.inputForm}>
              <TextInput
                style={authScreenStyled.textInput}
                placeholder="Password"
                placeholderTextColor={"#BDBDBD"}
                secureTextEntry={securePassword}
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
              />
              <TouchableOpacity
                style={authScreenStyled.buttonSecure}
                onPress={() => {
                  setSecurePassword(!securePassword);
                }}
              >
                <Feather name="eye-off" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                ...authScreenStyled.button,
                marginTop: isShowKeyboard ? 20 : 43,
              }}
              activeOpacity={0.8}
              onPress={() => {
                onSubmit();
              }}
            >
              <Text style={authScreenStyled.buttonTitle}>REGISTRATION</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
