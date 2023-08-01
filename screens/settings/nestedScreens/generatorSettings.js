import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

import { fetchGeneratorSetting } from "../../../redux/settings/settingsOperations";
import GeneratorSettingsForm from "./generatorSettingsForm";

const GeneratorSettingsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(fetchGeneratorSetting());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <GeneratorSettingsForm />
    </View>
  );
};

export default GeneratorSettingsScreen;
