import { useState, useEffect, useMemo } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import RadioGroup from "react-native-radio-buttons-group";

import {
  getAuthUserAvatar,
  getAuthUserLanguage,
} from "../../../redux/auth/authSelector";

import { fetchUserData } from "../../../redux/settings/settingsOperations";
import { FormattedMessage } from "react-intl";
import { updateUserData } from "../../../redux/auth/authOperations";
import { Image } from "react-native";

const UserSettingsScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const language = useSelector(getAuthUserLanguage);
  const [inerfaceLanguage, setInerfaceLanguage] = useState(language);
  const dispatch = useDispatch();
  const avatar = useSelector(getAuthUserAvatar);
  const [selectedLangualge, setSelectedLanguage] = useState(language);

  const radioButtonsLanguage = useMemo(
    () => [
      {
        id: "en",
        label: "EN",
        value: "en",
      },
      {
        id: "ru",
        label: "RU",
        value: "ru",
      },
      {
        id: "ua",
        label: "UA",
        value: "ua",
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
    <View style={{ alignItems: "center" }}>
      <Text>
        <FormattedMessage id="user_settings" />
      </Text>
      <Image source={{ uri: avatarUrl }} style={{ height: 256, width: 256 }} />
      <Text>
        <FormattedMessage id="name" />
      </Text>
      <TextInput
        placeholder={firstName ? firstName : "input first name"}
        placeholderTextColor={"#BDBDBD"}
        value={firstName}
        onChangeText={(value) => setFirstName(value)}
      />
      <Text>
        <FormattedMessage id="surname" />
      </Text>
      <TextInput
        placeholder={secondName ? secondName : "input second name"}
        placeholderTextColor={"#BDBDBD"}
        value={secondName}
        onChangeText={(value) => setSecondName(value)}
      />
      <Text>
        <FormattedMessage id="email" />
      </Text>
      <TextInput
        placeholder={email ? email : "input email"}
        placeholderTextColor={"#BDBDBD"}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <Text>
        <FormattedMessage id="change_mail_message" />
      </Text>
      <Text>
        <FormattedMessage id="language" />
      </Text>
      <RadioGroup
        radioButtons={radioButtonsLanguage}
        onPress={setSelectedLanguage}
        selectedId={selectedLangualge}
        layout="row"
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>
          <FormattedMessage id="submit" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserSettingsScreen;
