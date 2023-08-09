import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";

import { SettingsScreenStile } from "./settingScreensStyled";

const GetPhoto = () => {
  const [camera, setCamera] = useState(null);
  const [state, setState] = useState([]);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync();
    setState((prevState) => ({ ...prevState, photo: uri }));
    setPhoto(uri);
  };

  return (
    <View style={SettingsScreenStile.getPhotoContainer}>
      <Text>Get Photo</Text>
      <Camera ref={setCamera} style={SettingsScreenStile.camera}>
        {state.photo && (
          <Image
            style={SettingsScreenStile.takePhotoContainer}
            source={{ uri: state.photo }}
          />
        )}
        <TouchableOpacity
          style={SettingsScreenStile.cameraButtonContainer}
          onPress={takePhoto}
        >
          <MaterialIcons name="photo-camera" size={24} color="black" />
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

export default GetPhoto;
