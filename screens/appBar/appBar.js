import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AppBarStyles } from "./appBarStyled";
import { useSelector } from "react-redux";
import { getAuthUserAvatar } from "../../redux/auth/authSelector";
import { TouchableOpacity } from "react-native";

const AppBar = () => {
  const navigation = useNavigation();
  const avatar = useSelector(getAuthUserAvatar);
  return (
    <View style={AppBarStyles.container}>
      <View style={AppBarStyles.logoContainer}>
        <Image
          source={require("../../pictures/logo-generators.png")}
          style={AppBarStyles.picture}
        />
        <Text style={AppBarStyles.title}>PowerGen Tracker</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserSettings")}
        style={AppBarStyles.avatarContainer}
      >
        <Image source={{ uri: avatar }} style={AppBarStyles.avatar} />
      </TouchableOpacity>
    </View>
  );
};

export default AppBar;
