import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Toast from "react-native-toast-message";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import AppBar from "../../appBar/appBar";

import { fetchWorkingCycles } from "../../../redux/cycle/cycleOperations";
import ReportListItem from "./reportListItem";
import ReportTotalData from "./reportTotalData";
import { getCycleRefreshing } from "../../../redux/cycle/cycleSelector";
import { ReportScreenStile } from "./reportScreenStyled";
import { ScrollView } from "react-native";

const Report = ({ navigation }) => {
  const refreshing = useSelector(getCycleRefreshing);
  const [isVisibleDatePickerStart, setIsVisibleDatePickerStart] =
    useState(false);
  const [isVisibleDatePickerStop, setIsVisibleDatePickerStop] = useState(false);
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
      dateStop: lastDayOfMonth.setHours(23, 59, 0, 0),
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
        data && setCycles(data.payload.data.WorkingCycles);
      } catch (error) {
        Toast.show({ type: "error", text1: "something is Wrong" });
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtering, sorting, refreshing, dispatch]);

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

  const onChangeFilteringByStart = (date) => {
    setFiltering((prevFilter) => ({
      ...prevFilter,
      dateStart: date,
    }));
    setIsVisibleDatePickerStart(false);
  };
  const onChangeFilteringByStop = (date) => {
    setFiltering((prevFilter) => ({
      ...prevFilter,
      dateStop: date,
    }));
    setIsVisibleDatePickerStop(false);
  };

  return (
    <View>
      <AppBar />
      <View style={ReportScreenStile.filterContainer}>
        <View style={ReportScreenStile.filterSemiContainer}>
          <Text style={ReportScreenStile.filterTitleText}>
            <FormattedMessage id="show_from" />
          </Text>
          <DateTimePickerModal
            inVisible={isVisibleDatePickerStart}
            mode="datetime"
            onConfirm={(date) => onChangeFilteringByStart(date)}
            onCancel={() => setIsVisibleDatePickerStart(false)}
          />
          <TouchableOpacity
            onPress={() => {
              setIsVisibleDatePickerStart(true);
            }}
          >
            <Text style={ReportScreenStile.filterText}>
              {formatedDate(filtering.dateStart)}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={ReportScreenStile.filterSemiContainer}>
          <Text style={ReportScreenStile.filterTitleText}>
            <FormattedMessage id="show_to" />
          </Text>
          <DateTimePickerModal
            inVisible={isVisibleDatePickerStop}
            mode="datetime"
            onConfirm={(date) => onChangeFilteringByStop(date)}
            onCancel={() => setIsVisibleDatePickerStop(false)}
          />
          <TouchableOpacity
            onPress={() => {
              setIsVisibleDatePickerStop(true);
            }}
          >
            <Text style={ReportScreenStile.filterText}>
              {formatedDate(filtering.dateStop)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ flexGrow: 1 }}>
        {cycles && (
          <FlatList
            data={cycles}
            renderItem={({ item }) => (
              <ReportListItem item={item} navigation={navigation} />
            )}
          />
        )}
        {cycles && <ReportTotalData cycles={cycles} />}
      </ScrollView>
    </View>
  );
};

export default Report;
