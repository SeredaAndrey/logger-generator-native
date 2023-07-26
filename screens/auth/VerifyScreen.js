import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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
import { verification } from "../../redux/auth/authOperations";

export default function VerifyScreen() {
  const [vToken, setVToken] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dimensions, setDimentions] = useState(Dimensions.get("window").width);
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
    dispatch(verification({ vToken }));
    setVToken("");
    hidenKeyboard();
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
              Verification
            </Text>
            <View style={authScreenStyled.inputForm}>
              <TextInput
                style={{ ...authScreenStyled.textInput, marginTop: 0 }}
                placeholder="verification token"
                placeholderTextColor={"#BDBDBD"}
                value={vToken}
                onChangeText={(value) => setVToken(value)}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
              />
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
              <Text style={authScreenStyled.buttonTitle}>VERIFY</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
