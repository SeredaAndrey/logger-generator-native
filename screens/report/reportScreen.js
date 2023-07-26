import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import DatePicker from "react-native-date-picker";

import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import AppBar from "../appBar/appBar";

import { fetchWorkingCycles } from "../../redux/cycle/cycleOperations";
import { ReportScreenStile } from "./reportScreenStyled";
import { FormattedMessage } from "react-intl";

const ReportScreen = () => {
  const [openStart, setOpenStart] = useState(false);
  const [openStop, setOpenStop] = useState(false);
  const [cycles, setCycles] = useState();
  const [filtering, setFiltering] = useState(() => {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    return {
      dateStart: firstDayOfMonth,
      dateStop: lastDayOfMonth,
    };
  });
  const [sorting, setSorting] = useState({
    filter: "start",
    sort: "ascending",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await dispatch(fetchWorkingCycles({ filtering, sorting }));
        // console.log(data.payload);

        data && setCycles(data.payload.data.WorkingCycles);
        // console.log(cycles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtering, sorting, dispatch]);

  const formatedDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} ${formattedTime}`;
  };
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
    <View>
      <AppBar />
      <View>
        <Text>
          <FormattedMessage id="show_from" />
        </Text>
        <TouchableOpacity onPress={() => setOpenStart(true)}>
          <Text>{formatedDate(filtering.dateStart)}</Text>
        </TouchableOpacity>
        <DatePicker
          modal
          open={openStart}
          date={filtering.dateStart}
          onConfirm={(date) => {
            setOpenStart(false);
            setFiltering((prevFilter) => ({
              ...prevFilter,
              dateStart: date,
            }));
          }}
        />

        <Text>
          <FormattedMessage id="show_to" />
          <TouchableOpacity onPress={() => setOpenStop(true)}>
            <Text>{formatedDate(filtering.dateStop)}</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <SafeAreaView>
        {cycles && (
          <FlatList
            data={cycles}
            renderItem={({ item }) => (
              <View style={ReportScreenStile.itemContainer}>
                <View style={ReportScreenStile.semiItemContainer}>
                  <Text style={ReportScreenStile.text}>
                    {formatedDate(item.timestampStart)}
                  </Text>
                  <Text style={ReportScreenStile.text}>
                    {formatedDate(item.timestampStop)}
                  </Text>
                  <MaterialCommunityIcons
                    name="clock-time-ten-outline"
                    size={24}
                    color="black"
                  />
                  <Text style={ReportScreenStile.text}>
                    {calculateTime({ time: item.workingTimeOfCycle })}
                  </Text>
                </View>
                <View style={ReportScreenStile.semiItemContainer}>
                  <MaterialCommunityIcons
                    name="lightning-bolt-outline"
                    size={24}
                    color="black"
                  />
                  <Text style={ReportScreenStile.text}>
                    {item.volumeElecricalGeneration
                      ? `${item.volumeElecricalGeneration} kW`
                      : "---"}
                  </Text>
                  <MaterialCommunityIcons
                    name="gas-station"
                    size={24}
                    color="black"
                  />
                  <Text style={ReportScreenStile.text}>
                    {item.refueling ? `${item.refueling} litre` : "---"}
                  </Text>
                  <MaterialCommunityIcons name="oil" size={24} color="black" />
                  <Text style={ReportScreenStile.text}>
                    {item.changeOil ? (
                      <FontAwesome name="check" size={24} color="black" />
                    ) : (
                      "---"
                    )}
                  </Text>
                </View>
              </View>
            )}
          />
        )}
      </SafeAreaView>
      {cycles && (
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
      )}
    </View>
  );
};

export default ReportScreen;
