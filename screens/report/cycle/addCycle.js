import { View } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import AppBar from "../../appBar/appBar";
import { addWorkingCycle } from "../../../redux/cycle/cycleOperations";
import CycleForm from "./cycleForm";

const AddCycle = () => {
  const [cycle, setCycle] = useState([]);
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
    setCycle({});
    data && navigation("report");
  };

  const handleChange = ({ target: { name, value, checked } }) => {
    switch (name) {
      case "volumeElecricalGeneration":
        return setCycle({ ...cycle, volumeElecricalGeneration: value });
      case "refueling":
        return setCycle({ ...cycle, refueling: value });
      case "changeOil":
        return setCycle({ ...cycle, changeOil: checked });
      default:
        return;
    }
  };

  const onChangeStartTimeStamp = (date) => {
    setCycle({ ...cycle, timestampStart: date });
  };
  const onChangeStopTimeStamp = (date) => {
    setCycle({ ...cycle, timestampStop: date });
  };

  console.log("cycle: ", cycle);

  return (
    <View>
      <AppBar />
      <CycleForm
        cycle={cycle}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        onChangeStartTimeStamp={onChangeStartTimeStamp}
        onChangeStopTimeStamp={onChangeStopTimeStamp}
        isNewCycle={true}
      />
    </View>
  );
};

export default AddCycle;
