import { View } from "react-native";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";

import CycleForm from "./cycleForm";
import { patchWorkingCycleUnit } from "../../../redux/cycle/cycleOperations";

const PatchCycle = (props) => {
  console.log("props: ", props);
  const dispatch = useDispatch();
  const [cycle, setCycle] = useState({
    changeOil: props.route.params.item.changeOil,
    refueling: props.route.params.item.refueling,
    volumeElecricalGeneration:
      props.route.params.item.volumeElecricalGeneration,
    timestampStart: new Date(props.route.params.item.timestampStart),
    timestampStop: new Date(props.route.params.item.timestampStop),
  });

  const handleSubmit = async () => {
    const data = await dispatch(
      patchWorkingCycleUnit({ cycle, id: props.route.params.item._id })
    );
    // console.log("navigation: ", navigation);
    // setCycle({});
    // !data
    //   ? props.navigate("reportScreen")
    //   : Toast.show({ type: "error", text1: "something is Wrong" });
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
      />
    </View>
  );
};

export default PatchCycle;
