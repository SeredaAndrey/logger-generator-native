import { View } from "react-native";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import TotalSettingsForm from "./totalSettingsForm";
import { fetchGeneralSetting } from "../../../redux/settings/settingsOperations";

const TotalSettingsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(fetchGeneralSetting());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <TotalSettingsForm />
    </View>
  );
};

export default TotalSettingsScreen;
