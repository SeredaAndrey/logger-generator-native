import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {
  getSettingBrand,
  getSettingDataFirstStart,
  getSettingFirstChangeOilReglament,
  getSettingFuelVolume,
  getSettingId,
  getSettingIsPresent,
  getSettingNextChangeOilReglament,
  getSettingOilVolume,
  getSettingType,
  getSettingWorkingFirsStart,
  getSettingelEctricalPower,
} from "../../../redux/settings/settingsSelector";

import { SettingsScreenStile } from "./settingScreensStyled";
import { FormattedMessage } from "react-intl";
import {
  createNewSettingGenerator,
  patchingSettingsGenerator,
} from "../../../redux/settings/settingsOperations";

const GeneratorSettingsForm = () => {
  const dispatch = useDispatch();
  const brand = useSelector(getSettingBrand);
  const type = useSelector(getSettingType);
  const firstChangeOilReglament = useSelector(
    getSettingFirstChangeOilReglament
  );
  const nextChangeOilReglament = useSelector(getSettingNextChangeOilReglament);
  const electricalPower = useSelector(getSettingelEctricalPower);
  const dataFirstStart = useSelector(getSettingDataFirstStart);
  const workingFirsStart = useSelector(getSettingWorkingFirsStart);
  const oilVolume = useSelector(getSettingOilVolume);
  const fuelVolume = useSelector(getSettingFuelVolume);
  const settingsIsPresent = useSelector(getSettingIsPresent);
  const idGenerator = useSelector(getSettingId);
  const [settings, setSettings] = useState({});
  const [isVisibleDatePicker, setIsVisibleDatePicker] = useState(false);

  useEffect(() => {
    setSettings({
      ...(brand !== null && { brand }),
      ...(type !== null && { type }),
      ...(firstChangeOilReglament !== null && { firstChangeOilReglament }),
      ...(nextChangeOilReglament !== null && { nextChangeOilReglament }),
      ...(electricalPower !== null && { electricalPower }),
      ...(dataFirstStart !== null && {
        dataFirstStart: new Date(dataFirstStart),
      }),
      ...(workingFirsStart !== null && { workingFirsStart }),
      ...(oilVolume !== null && { oilVolume }),
      ...(fuelVolume !== null && { fuelVolume }),
    });
  }, [
    brand,
    type,
    firstChangeOilReglament,
    nextChangeOilReglament,
    electricalPower,
    workingFirsStart,
    oilVolume,
    fuelVolume,
    dataFirstStart,
  ]);

  const handleSubmit = async (e) => {
    !settingsIsPresent
      ? await dispatch(createNewSettingGenerator(settings))
      : await dispatch(patchingSettingsGenerator({ settings, idGenerator }));
  };

  const formatedDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <View>
      <Text style={SettingsScreenStile.screenTitle}>
        <FormattedMessage id="gen_settings" />
      </Text>

      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="brand" />
      </Text>
      <TextInput
        style={SettingsScreenStile.textInput}
        placeholder={"example: Dnipro-M"}
        placeholderTextColor={"#BDBDBD"}
        value={settings.brand}
        onChangeText={(value) => setSettings({ ...settings, brand: value })}
      />

      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="model" />
      </Text>
      <TextInput
        style={SettingsScreenStile.textInput}
        placeholder={"example: GX-50E"}
        placeholderTextColor={"#BDBDBD"}
        value={settings.type}
        onChangeText={(value) => setSettings({ ...settings, type: value })}
      />

      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="first_reglament" />
      </Text>
      <TextInput
        style={SettingsScreenStile.textInput}
        placeholder={"example: 20"}
        placeholderTextColor={"#BDBDBD"}
        value={`${settings.firstChangeOilReglament}`}
        onChangeText={(value) =>
          setSettings({ ...settings, firstChangeOilReglament: value })
        }
      />

      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="next_reglament" />
      </Text>
      <TextInput
        style={SettingsScreenStile.textInput}
        placeholder={"example: 50"}
        placeholderTextColor={"#BDBDBD"}
        value={`${settings.nextChangeOilReglament}`}
        onChangeText={(value) =>
          setSettings({ ...settings, nextChangeOilReglament: value })
        }
      />

      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="power" />
      </Text>
      <TextInput
        style={SettingsScreenStile.textInput}
        placeholder={"example: 5.5"}
        placeholderTextColor={"#BDBDBD"}
        value={`${settings.electricalPower}`}
        onChangeText={(value) =>
          setSettings({ ...settings, electricalPower: value })
        }
      />

      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="before_first_start" />
      </Text>
      <TextInput
        style={SettingsScreenStile.textInput}
        placeholder={"example: 10"}
        placeholderTextColor={"#BDBDBD"}
        value={`${settings.workingFirsStart}`}
        onChangeText={(value) =>
          setSettings({ ...settings, workingFirsStart: value })
        }
      />

      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="volume_oil" />
      </Text>
      <TextInput
        style={SettingsScreenStile.textInput}
        placeholder={"example: 1.1"}
        placeholderTextColor={"#BDBDBD"}
        value={`${settings.oilVolume}`}
        onChangeText={(value) => setSettings({ ...settings, oilVolume: value })}
      />

      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="volume_fuel" />
      </Text>
      <TextInput
        style={SettingsScreenStile.textInput}
        placeholder={"example: 25"}
        placeholderTextColor={"#BDBDBD"}
        value={`${settings.fuelVolume}`}
        onChangeText={(value) =>
          setSettings({ ...settings, fuelVolume: value })
        }
      />

      <Text style={SettingsScreenStile.inputFormTitle}>
        <FormattedMessage id="first_start" />
      </Text>
      <DateTimePickerModal
        isVisible={isVisibleDatePicker}
        mode="date"
        onConfirm={(date) => setSettings({ ...settings, dataFirstStart: date })}
        onCancel={() => {
          setIsVisibleDatePicker(false);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          setIsVisibleDatePicker(true);
        }}
      >
        <Text style={SettingsScreenStile.textInput}>
          {settings.dataFirstStart && formatedDate(settings.dataFirstStart)}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSubmit}
        style={SettingsScreenStile.button}
      >
        <Text style={SettingsScreenStile.buttonTitle}>
          {settingsIsPresent ? (
            <FormattedMessage id="patch_gen" />
          ) : (
            <FormattedMessage id="new_gen" />
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GeneratorSettingsForm;
