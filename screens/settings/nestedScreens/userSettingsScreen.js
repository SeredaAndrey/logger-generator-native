import { useState, useEffect, useMemo } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import RadioGroup from "react-native-radio-buttons-group";
import { useNavigation } from "@react-navigation/native";

import {
  getAuthUserAvatar,
  getAuthUserLanguage,
} from "../../../redux/auth/authSelector";

import { fetchUserData } from "../../../redux/settings/settingsOperations";
import { FormattedMessage } from "react-intl";
import { updateUserData } from "../../../redux/auth/authOperations";
import { Image } from "react-native";
import { SettingsScreenStile } from "./settingScreensStyled";

const UserSettingsScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const language = useSelector(getAuthUserLanguage);
  const dispatch = useDispatch();
  const avatar = useSelector(getAuthUserAvatar);
  const [selectedLangualge, setSelectedLanguage] = useState(language);

  const radioButtonsLanguage = useMemo(
    () => [
      {
        id: "en",
        label: "EN",
        value: "en",
        borderColor: "#E8E8E8",
        color: "#d1d1d1",
        borderSize: 1,
        labelStyle: SettingsScreenStile.radioLabel,
        size: 20,
      },
      {
        id: "ru",
        label: "RU",
        value: "ru",
        borderColor: "#E8E8E8",
        color: "#d1d1d1",
        borderSize: 1,
        labelStyle: SettingsScreenStile.radioLabel,
        size: 20,
      },
      {
        id: "ua",
        label: "UA",
        value: "ua",
        borderColor: "#E8E8E8",
        color: "#d1d1d1",
        borderSize: 1,
        labelStyle: SettingsScreenStile.radioLabel,
        size: 20,
      },
    ],
    []
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await dispatch(fetchUserData());
        userData && setFirstName(userData.payload.userData.firstName);
        userData && setSecondName(userData.payload.userData.seccondName);
        userData && setEmail(userData.payload.userData.email);
        userData && setAvatarUrl(userData.payload.userData.avatarUrl);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avatar]);

  const handleSubmit = async (e) => {
    dispatch(
      await updateUserData({
        firstName,
        secondName,
        email,
        inerfaceLanguage: selectedLangualge,
      })
    );
  };

  return (
    <View>
      <Text style={SettingsScreenStile.screenTitle}>
        <FormattedMessage id="user_settings" />
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("GetPhoto")}>
        <View style={SettingsScreenStile.imageContainer}>
          <Image
            source={{ uri: avatarUrl }}
            style={SettingsScreenStile.avatar}
          />
        </View>
      </TouchableOpacity>
      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="name" />
      </Text>
      <TextInput
        style={SettingsScreenStile.textInput}
        placeholder={firstName ? firstName : "input first name"}
        placeholderTextColor={"#BDBDBD"}
        value={firstName}
        onChangeText={(value) => setFirstName(value)}
      />
      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="surname" />
      </Text>
      <TextInput
        style={SettingsScreenStile.textInput}
        placeholder={secondName ? secondName : "input second name"}
        placeholderTextColor={"#BDBDBD"}
        value={secondName}
        onChangeText={(value) => setSecondName(value)}
      />
      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="email" />
      </Text>
      <TextInput
        style={SettingsScreenStile.textInput}
        placeholder={email ? email : "input email"}
        placeholderTextColor={"#BDBDBD"}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <Text style={SettingsScreenStile.inputFormWarning}>
        <FormattedMessage id="change_mail_message" />
      </Text>
      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="language" />
      </Text>
      <RadioGroup
        containerStyle={SettingsScreenStile.radioContainer}
        radioButtons={radioButtonsLanguage}
        onPress={setSelectedLanguage}
        selectedId={selectedLangualge}
        layout="row"
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={SettingsScreenStile.button}
      >
        <Text style={SettingsScreenStile.buttonTitle}>
          <FormattedMessage id="submit" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserSettingsScreen;
