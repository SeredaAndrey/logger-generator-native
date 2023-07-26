import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import AppBar from "../appBar/appBar";

import { CalcDataStyles } from "./calculateDateStyled";
import { fetchCalcData } from "../../redux/cycle/cycleOperations";
import { FormattedMessage } from "react-intl";

const calcData = () => {
  const [calcData, setCalcData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await dispatch(fetchCalcData());

        if (data.payload.calculationData) data && setCalcData(data.payload);
        // console.log(data.payload);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch]);

  const calculateTime = (totalWorkingTime) => {
    const hours = Math.floor(totalWorkingTime / (1000 * 60 * 60));
    const minutes = Math.floor(
      (totalWorkingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View style={CalcDataStyles.container}>
      <AppBar />
      {calcData && (
        <View style={CalcDataStyles.dataContainer}>
          <Text style={CalcDataStyles.stringTitle}>
            <FormattedMessage id="calc_total_gen" />
          </Text>
          <Text style={CalcDataStyles.string}>
            {!calcData.calculationData.data.totalGeneration
              ? "---"
              : calcData.calculationData.data.totalGeneration}{" "}
            <FormattedMessage id="kw" />{" "}
            {!calcData.calculationData.data.totalCostGeneration
              ? "---"
              : calcData.calculationData.data.totalCostGeneration}{" "}
            <FormattedMessage id="uahKwt" />
          </Text>
          <Text style={CalcDataStyles.stringTitle}>
            <FormattedMessage id="calc_month_gen" />
          </Text>
          <Text style={CalcDataStyles.string}>
            {!calcData.calculationData.data.totalGenerationMonth
              ? "---"
              : calcData.calculationData.data.totalGenerationMonth}{" "}
            <FormattedMessage id="kw" />{" "}
            {!calcData.calculationData.data.totalCostGenerationMonth
              ? "---"
              : calcData.calculationData.data.totalCostGenerationMonth}{" "}
            <FormattedMessage id="uahKwt" />
          </Text>
          <Text style={CalcDataStyles.stringTitle}>
            <FormattedMessage id="calc_total_run" />
          </Text>
          <Text style={CalcDataStyles.string}>
            {!calcData.calculationData.data.totalWorkingTime
              ? "---"
              : calculateTime(
                  calcData.calculationData.data.totalWorkingTime
                )}{" "}
            <FormattedMessage id="h_m" />
          </Text>
          <Text style={CalcDataStyles.stringTitle}>
            <FormattedMessage id="calc_month_run" />
          </Text>
          <Text style={CalcDataStyles.string}>
            {!calcData.calculationData.data.totalWorkingTimeMonth
              ? "---"
              : calculateTime(
                  calcData.calculationData.data.totalWorkingTimeMonth
                )}{" "}
            <FormattedMessage id="h_m" />
          </Text>
          <Text style={CalcDataStyles.stringTitle}>
            <FormattedMessage id="calc_fuel_consumpt" />
          </Text>
          <Text style={CalcDataStyles.string}>
            {!calcData.calculationData.data.totalAverageFuelConsumption
              ? "---"
              : calcData.calculationData.data.totalAverageFuelConsumption}{" "}
            <FormattedMessage id="l_hour" />
          </Text>
          <Text style={CalcDataStyles.stringTitle}>
            <FormattedMessage id="calc_work_cost" />
          </Text>
          <Text style={CalcDataStyles.string}>
            {!calcData.calculationData.data.totalAverageWorkingCost
              ? "---"
              : calcData.calculationData.data.totalAverageWorkingCost}{" "}
            <FormattedMessage id="uah_h" />
          </Text>
          <Text style={CalcDataStyles.stringTitle}>
            <FormattedMessage id="calc_oil_change" />
          </Text>
          <Text style={CalcDataStyles.string}>
            {!calcData.calculationData.data.timeToChangeOil
              ? "---"
              : calculateTime(
                  calcData.calculationData.data.timeToChangeOil
                )}{" "}
            <FormattedMessage id="h_m" />
          </Text>
        </View>
      )}
    </View>
  );
};

export default calcData;
