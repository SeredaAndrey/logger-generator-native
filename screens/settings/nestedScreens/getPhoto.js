import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Octicons, Feather } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";

import { SettingsScreenStile } from "./settingScreensStyled";
import { FormattedMessage } from "react-intl";
import { updateUserAvatar } from "../../../redux/auth/authOperations";

const GetPhoto = () => {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [state, setState] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };
  const takePhoto = async () => {
    const photoSnap = await cameraRef.takePictureAsync();
    setState((prevState) => ({ ...prevState, photo: photoSnap.uri }));
  };

  const sendPhoto = async () => {
    if (state.photo) {
      dispatch(updateUserAvatar(state.photo));
      navigation.navigate("UserSettings");
      setState([]);
    }
  };

  return (
    <View style={SettingsScreenStile.getPhotoContainer}>
      {/* <Text>{state}</Text> */}
      <Camera style={SettingsScreenStile.camera} type={type} ref={setCameraRef}>
        {state.photo && (
          <Image
            style={SettingsScreenStile.takePhotoContainer}
            source={{ uri: state.photo }}
          />
        )}
        <TouchableOpacity
          style={SettingsScreenStile.cameraButtonContainer}
          onPress={toggleCameraType}
        >
          <Feather name="refresh-ccw" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={SettingsScreenStile.cameraButtonContainer}
          onPress={takePhoto}
        >
          <Octicons name="circle" size={32} color="black" />
        </TouchableOpacity>
      </Camera>
      {state.photo ? (
        <TouchableOpacity
          onPress={sendPhoto}
          style={SettingsScreenStile.button}
          activeOpacity={0.8}
        >
          <Text style={SettingsScreenStile.buttonTitle}>
            <FormattedMessage id="submit" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={SettingsScreenStile.sendButtonUnactive}
          activeOpacity={0.8}
        >
          <Text style={SettingsScreenStile.buttonTitleUnactive}>
            <FormattedMessage id="submit" />
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GetPhoto;
