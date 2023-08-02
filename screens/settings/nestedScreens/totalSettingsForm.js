import { useState, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

import {
  getGeneralSettingId,
  getGeneralSettingIsGeneralSettingPreset,
  getGeneralSettingPriceOfElectrical,
  getGeneralSettingPriceOfGasoline,
  getGeneralSettingPriceOfOil,
} from "../../../redux/settings/settingsSelector";
import { SettingsScreenStile } from "./settingScreensStyled";
import {
  createNewGeneralSetting,
  patchGeneralSetting,
} from "../../../redux/settings/settingsOperations";

const TotalSettingsForm = () => {
  const dispatch = useDispatch();

  const priceOfOil = useSelector(getGeneralSettingPriceOfOil);
  const priceOfGasoline = useSelector(getGeneralSettingPriceOfGasoline);
  const priceOfElectrical = useSelector(getGeneralSettingPriceOfElectrical);
  const isGeneralSettingPreset = useSelector(
    getGeneralSettingIsGeneralSettingPreset
  );
  const idGeneral = useSelector(getGeneralSettingId);

  const [generalSettings, setGeneralSettings] = useState({});

  useEffect(() => {
    setGeneralSettings({
      ...(priceOfOil !== null && { priceOfOil }),
      ...(priceOfGasoline !== null && { priceOfGasoline }),
      ...(priceOfElectrical !== null && { priceOfElectrical }),
    });
  }, [priceOfOil, priceOfGasoline, priceOfElectrical]);

  const handleSubmit = async (e) => {
    !isGeneralSettingPreset
      ? await dispatch(createNewGeneralSetting(generalSettings))
      : await dispatch(patchGeneralSetting({ generalSettings, idGeneral }));
  };

  return (
    <View>
      <Text style={SettingsScreenStile.screenTitle}>
        <FormattedMessage id="global_settings" />
      </Text>

      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="price_oil" />
      </Text>
      <TextInput
        style={SettingsScreenStile.textInput}
        placeholder={"example: 255"}
        placeholderTextColor={"#BDBDBD"}
        value={generalSettings.priceOfOil}
        onChangeText={(value) =>
          setGeneralSettings({ ...generalSettings, priceOfOil: value })
        }
      />

      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="price_fuel" />
      </Text>
      <TextInput
        style={SettingsScreenStile.textInput}
        placeholder={"example: 48"}
        placeholderTextColor={"#BDBDBD"}
        value={generalSettings.priceOfGasoline}
        onChangeText={(value) =>
          setGeneralSettings({ ...generalSettings, priceOfGasoline: value })
        }
      />

      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="price_electr" />
      </Text>
      <TextInput
        style={SettingsScreenStile.textInput}
        placeholder={"example: 2.5"}
        placeholderTextColor={"#BDBDBD"}
        value={generalSettings.priceOfElectrical}
        onChangeText={(value) =>
          setGeneralSettings({ ...generalSettings, priceOfElectrical: value })
        }
      />

      <TouchableOpacity
        onPress={handleSubmit}
        style={SettingsScreenStile.button}
      >
        <Text style={SettingsScreenStile.buttonTitle}>
          {isGeneralSettingPreset ? (
            <FormattedMessage id="patch_gen" />
          ) : (
            <FormattedMessage id="new_gen" />
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TotalSettingsForm;
