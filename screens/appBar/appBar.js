import { Image, Text, View } from "react-native";

import { AppBarStyles } from "./appBarStyled";
import { useSelector } from "react-redux";
import authSelector from "../../redux/auth/authSelector";

const AppBar = () => {
  const avatar = useSelector(authSelector.getUserAvatar);
  return (
    <View style={AppBarStyles.container}>
      <View style={AppBarStyles.logoContainer}>
        <Image
          source={require("../../pictures/logo-generators.png")}
          style={AppBarStyles.picture}
        />
        <Text style={AppBarStyles.title}>PowerGen Tracker</Text>
      </View>

      <Image source={{ uri: avatar }} style={AppBarStyles.avatar} />
    </View>
  );
};

export default AppBar;
