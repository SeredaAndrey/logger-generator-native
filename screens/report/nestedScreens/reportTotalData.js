import { Text, View } from "react-native";
import { FormattedMessage } from "react-intl";

import { ReportScreenStile } from "./reportScreenStyled";

const ReportTotalData = ({ cycles }) => {
  const calculateTime = ({ time }) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };
  const countTotalWorkingTime = (cycles) => {
    let time = 0;
    cycles.forEach((item) => {
      if (item.workingTimeOfCycle) {
        time += item.workingTimeOfCycle;
      }
    });
    return calculateTime({ time });
  };
  const countTotalGenerationPower = (cycles) => {
    let totalGenerationPower = 0;
    cycles.forEach((item) => {
      if (item.volumeElecricalGeneration) {
        totalGenerationPower += item.volumeElecricalGeneration;
      }
    });
    return totalGenerationPower;
  };
  const countTotalRefueling = (cycles) => {
    let totalRafueling = 0;
    cycles.forEach((item) => {
      if (item.refueling) {
        totalRafueling += item.refueling;
      }
    });
    return totalRafueling;
  };
  const countTotalChangeOil = (cycles) => {
    let totalChangeOil = 0;
    cycles.forEach((item) => {
      if (item.changeOil) {
        totalChangeOil += 1;
      }
    });
    return totalChangeOil;
  };

  return (
    <View style={ReportScreenStile.totalContainer}>
      <View style={ReportScreenStile.totalSemiContainer}>
        <View style={ReportScreenStile.totalTextContainer}>
          <Text style={ReportScreenStile.totalText}>
            <FormattedMessage id="total_time" />
          </Text>
          <Text style={ReportScreenStile.totalDataText}>
            {countTotalWorkingTime(cycles) || "---"}
          </Text>
        </View>

        <View style={ReportScreenStile.totalTextContainer}>
          <Text style={ReportScreenStile.totalText}>
            <FormattedMessage id="total_gen" />
          </Text>
          <Text style={ReportScreenStile.totalDataText}>
            {countTotalGenerationPower(cycles) || "---"}
          </Text>
        </View>
      </View>

      <View style={ReportScreenStile.totalSemiContainer}>
        <View style={ReportScreenStile.totalTextContainer}>
          <Text style={ReportScreenStile.totalText}>
            <FormattedMessage id="total_refueling" />
          </Text>
          <Text style={ReportScreenStile.totalDataText}>
            {countTotalRefueling(cycles) || "---"}
          </Text>
        </View>

        <View style={ReportScreenStile.totalTextContainer}>
          <Text style={ReportScreenStile.totalText}>
            <FormattedMessage id="total_reoiling" />
          </Text>
          <Text style={ReportScreenStile.totalDataText}>
            {countTotalChangeOil(cycles) || "---"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ReportTotalData;
