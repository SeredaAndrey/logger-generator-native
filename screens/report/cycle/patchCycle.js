import { View } from "react-native";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import CycleForm from "./cycleForm";
import {
  deleteWorkingCycleUnit,
  patchWorkingCycleUnit,
} from "../../../redux/cycle/cycleOperations";

const PatchCycle = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [cycle, setCycle] = useState({
    changeOil: props.route.params.item.changeOil,
    refueling: props.route.params.item.refueling,
    volumeElecricalGeneration:
      props.route.params.item.volumeElecricalGeneration,
    timestampStart: new Date(props.route.params.item.timestampStart),
    timestampStop: new Date(props.route.params.item.timestampStop),
  });

  useEffect(() => {
    const startDateTime = new Date(cycle.timestampStart);
    const stopDateTime = new Date(cycle.timestampStop);

    setCycle({
      ...cycle,
      workingTimeOfCycle: stopDateTime.getTime() - startDateTime.getTime(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycle.timestampStart, cycle.timestampStop]);

  const handleSubmit = async () => {
    const data = await dispatch(
      patchWorkingCycleUnit({ cycle, id: props.route.params.item._id })
    );
    if (data) {
      navigation.navigate("reportScreen");
    } else {
      Toast.show({ type: "error", text1: "something is Wrong" });
    }
  };

  const onChangeGenerations = (value) => {
    setCycle({ ...cycle, volumeElecricalGeneration: value });
  };
  const onChangeRefueling = (value) => {
    setCycle({ ...cycle, refueling: value });
  };
  const onChangeStartTimeStamp = (date) => {
    setCycle({ ...cycle, timestampStart: date });
  };
  const onChangeStopTimeStamp = (date) => {
    setCycle({ ...cycle, timestampStop: date });
  };
  const onCheckedOil = () => {
    setCycle({ ...cycle, changeOil: !cycle.changeOil });
  };
  const deleteCycle = async () => {
    await dispatch(deleteWorkingCycleUnit(props.route.params.item._id));
    navigation.navigate("reportScreen");
  };

  return (
    <View>
      <CycleForm
        cycle={cycle}
        onChangeGenerations={onChangeGenerations}
        handleSubmit={handleSubmit}
        onChangeStartTimeStamp={onChangeStartTimeStamp}
        onChangeStopTimeStamp={onChangeStopTimeStamp}
        onCheckedOil={onCheckedOil}
        onChangeRefueling={onChangeRefueling}
        isNewCycle={false}
        deleteCycle={deleteCycle}
      />
    </View>
  );
};

export default PatchCycle;
