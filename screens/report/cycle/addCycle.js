import { View } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import AppBar from "../../appBar/appBar";
import { addWorkingCycle } from "../../../redux/cycle/cycleOperations";
import CycleForm from "./cycleForm";

const initialState = {
  changeOil: false,
  refueling: 0,
  volumeElecricalGeneration: 0,
  timestampStart: new Date(),
  timestampStop: new Date(),
};

const AddCycle = (props) => {
  const navigation = useNavigation();
  const [cycle, setCycle] = useState(initialState);
  const dispatch = useDispatch();

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
    const data = await dispatch(addWorkingCycle(cycle));
    setCycle(initialState);
    data && navigation.navigate("reportScreen");
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
      <AppBar />
      <CycleForm
        cycle={cycle}
        onChangeGenerations={onChangeGenerations}
        handleSubmit={handleSubmit}
        onChangeStartTimeStamp={onChangeStartTimeStamp}
        onChangeStopTimeStamp={onChangeStopTimeStamp}
        onCheckedOil={onCheckedOil}
        onChangeRefueling={onChangeRefueling}
        isNewCycle={true}
      />
    </View>
  );
};

export default AddCycle;
