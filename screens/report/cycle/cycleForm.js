import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { TextInput } from "react-native";
import { Text, View } from "react-native";
import Toast from "react-native-toast-message";

const CycleForm = ({
  handleSubmit,
  handleChange,
  onChangeStartTimeStamp,
  onChangeStopTimeStamp,
  cycle,
  isNewCycle,
}) => {
  const [workingTime, setWorkingTime] = useState(null);

  console.log("cycle: ", cycle);

  useEffect(() => {
    if (!cycle.timestampStart || !cycle.timestampStop) {
      calculateWorkingTime();
    }
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

  return (
    <View>
      <Text>
        {isNewCycle ? (
          <FormattedMessage id="create_cycle" />
        ) : (
          <FormattedMessage id="patch_cycle" />
        )}
      </Text>
      <TextInput
        placeholder="example: 5"
        placeholderTextColor={"#BDBDBD"}
        value={cycle.volumeElecricalGeneration}
        onChange={handleChange}
      />
    </View>
  );
};

export default CycleForm;
