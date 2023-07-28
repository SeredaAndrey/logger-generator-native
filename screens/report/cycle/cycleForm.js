import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { TextInput, TouchableOpacity, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CheckBox from "react-native-check-box";

import { CyclesScreensStile } from "./cycleScreensStyled";

const CycleForm = ({
  handleSubmit,
  onChangeGenerations,
  onChangeStartTimeStamp,
  onChangeStopTimeStamp,
  onCheckedOil,
  onChangeRefueling,
  cycle,
  isNewCycle,
}) => {
  const [isVisibleDatePickerStart, setIsVisibleDatePickerStart] =
    useState(false);
  const [isVisibleDatePickerStop, setIsVisibleDatePickerStop] = useState(false);
  const [workingTime, setWorkingTime] = useState(null);

  useEffect(() => {
    if (!cycle.timestampStart || !cycle.timestampStop) {
      calculateWorkingTime();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycle]);

  const formatedDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  return (
    <View style={CyclesScreensStile.formContainer}>
      <Text style={CyclesScreensStile.formTitle}>
        {isNewCycle ? (
          <FormattedMessage id="create_cycle" />
        ) : (
          <FormattedMessage id="patch_cycle" />
        )}
      </Text>
      <Text style={CyclesScreensStile.formTitleData}>
        <FormattedMessage id="start" />
      </Text>
      <TouchableOpacity
        style={CyclesScreensStile.formDataInputBox}
        onPress={() => {
          setIsVisibleDatePickerStart(true);
        }}
      >
        <Text>{formatedDate(cycle.timestampStart)}</Text>
      </TouchableOpacity>
      <Text style={CyclesScreensStile.formTitleData}>
        <FormattedMessage id="stop" />
      </Text>
      <TouchableOpacity
        style={CyclesScreensStile.formDataInputBox}
        onPress={() => {
          setIsVisibleDatePickerStop(true);
        }}
      >
        <Text>{formatedDate(cycle.timestampStop)}</Text>
      </TouchableOpacity>
      <Text style={CyclesScreensStile.formTitleData}>
        <FormattedMessage id="generated" />
      </Text>
      <TextInput
        style={CyclesScreensStile.formDataInputBox}
        placeholder="example: 5"
        placeholderTextColor={"#BDBDBD"}
        value={cycle.volumeElecricalGeneration}
        name="volumeElecricalGeneration"
        onChangeText={onChangeGenerations}
      />
      <Text style={CyclesScreensStile.formTitleData}>
        <FormattedMessage id="refueling" />
      </Text>
      <TextInput
        style={CyclesScreensStile.formDataInputBox}
        placeholder="example: 5"
        placeholderTextColor={"#BDBDBD"}
        name="refueling"
        value={cycle.refueling}
        onChangeText={onChangeRefueling}
      />
      <Text style={CyclesScreensStile.formTitleData}>
        <FormattedMessage id="reoiling" />
      </Text>
      <CheckBox isChecked={cycle.changeOil} onClick={onCheckedOil} />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>
          {isNewCycle ? (
            <FormattedMessage id="create" />
          ) : (
            <FormattedMessage id="patch" />
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CycleForm;
