import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { TextInput, TouchableOpacity, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CheckBox from "react-native-check-box";
import { Entypo } from "@expo/vector-icons";

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
  deleteCycle,
}) => {
  const [isVisibleDatePickerStart, setIsVisibleDatePickerStart] =
    useState(false);
  const [isVisibleDatePickerStop, setIsVisibleDatePickerStop] = useState(false);
  const [workingTime, setWorkingTime] = useState(null);

  useEffect(() => {
    calculateWorkingTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycle]);

  const calculateWorkingTime = () => {
    if (!cycle.timestampStart || !cycle.timestampStop) {
      return;
    } else {
      const startDateTime = new Date(cycle.timestampStart);
      const stopDateTime = new Date(cycle.timestampStop);

      const timeDiff = stopDateTime.getTime() - startDateTime.getTime();

      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      if (hours < 0 || minutes < 0) {
        setWorkingTime(null);
        Toast.show({
          type: "error",
          text1: "stop time is less than start time",
        });
        return;
      } else {
        const formattedTimeDiff = `${hours
          .toString()
          .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
        setWorkingTime(formattedTimeDiff);
        return;
      }
    }
  };

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
      <View>
        <Text style={CyclesScreensStile.formTitle}>
          {isNewCycle ? (
            <FormattedMessage id="create_cycle" />
          ) : (
            <FormattedMessage id="patch_cycle" />
          )}
        </Text>
        {!isNewCycle && (
          <TouchableOpacity
            style={CyclesScreensStile.deleteButton}
            onPress={deleteCycle}
          >
            <Entypo name="trash" size={40} color="black" />
          </TouchableOpacity>
        )}
      </View>

      <View
        style={{
          ...CyclesScreensStile.calculateTimeContainer,
          backgroundColor: !workingTime ? "#FEA2A2" : "#ABE5AE",
        }}
      >
        <Text style={CyclesScreensStile.calculateTimeTitle}>
          {workingTime ? workingTime : "--:--"}
        </Text>
      </View>

      <Text style={CyclesScreensStile.formTitleData}>
        <FormattedMessage id="start" />
      </Text>
      <DateTimePickerModal
        isVisible={isVisibleDatePickerStart}
        mode="datetime"
        onConfirm={(date) => onChangeStartTimeStamp(date)}
        onCancel={() => {
          setIsVisibleDatePickerStart(false);
        }}
      />
      <TouchableOpacity
        style={CyclesScreensStile.formDataInputBox}
        onPress={() => {
          setIsVisibleDatePickerStart(true);
        }}
      >
        <Text style={CyclesScreensStile.datePickerText}>
          {cycle.timestampStart && formatedDate(cycle.timestampStart)}
        </Text>
      </TouchableOpacity>
      <Text style={CyclesScreensStile.formTitleData}>
        <FormattedMessage id="stop" />
      </Text>
      <DateTimePickerModal
        isVisible={isVisibleDatePickerStop}
        mode="datetime"
        onConfirm={(date) => onChangeStopTimeStamp(date)}
        onCancel={() => {
          setIsVisibleDatePickerStop(false);
        }}
      />
      <TouchableOpacity
        style={CyclesScreensStile.formDataInputBox}
        onPress={() => {
          setIsVisibleDatePickerStop(true);
        }}
      >
        <Text style={CyclesScreensStile.datePickerText}>
          {cycle.timestampStop && formatedDate(cycle.timestampStop)}
        </Text>
      </TouchableOpacity>
      <Text style={CyclesScreensStile.formTitleData}>
        <FormattedMessage id="generated" />
      </Text>
      <TextInput
        style={CyclesScreensStile.formDataInputBox}
        placeholder="example: 5"
        placeholderTextColor={"#BDBDBD"}
        value={`${cycle.volumeElecricalGeneration}`}
        onChangeText={onChangeGenerations}
      />
      <Text style={CyclesScreensStile.formTitleData}>
        <FormattedMessage id="refueling" />
      </Text>
      <TextInput
        style={CyclesScreensStile.formDataInputBox}
        placeholder="example: 5"
        placeholderTextColor={"#BDBDBD"}
        value={`${cycle.refueling}`}
        onChangeText={onChangeRefueling}
      />
      <Text style={CyclesScreensStile.formTitleData}>
        <FormattedMessage id="reoiling" />
      </Text>
      <CheckBox
        style={CyclesScreensStile.checkbox}
        isChecked={cycle.changeOil}
        onClick={onCheckedOil}
      />
      <TouchableOpacity
        style={CyclesScreensStile.button}
        onPress={handleSubmit}
      >
        <Text style={CyclesScreensStile.buttonTitle}>
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
