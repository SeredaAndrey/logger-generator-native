import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import AppBar from "../../appBar/appBar";

import { fetchWorkingCycles } from "../../../redux/cycle/cycleOperations";
import { FormattedMessage } from "react-intl";
import ReportListItem from "./reportListItem";
import ReportTotalData from "./reportTotalData";

const Report = ({ navigation }) => {
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
        data && setCycles(data.payload.data.WorkingCycles);
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
        <DateTimePickerModal
          inVisible={openStart}
          mode="datetime"
          onConfirm={(date) => {
            setFiltering((prevFilter) => ({
              ...prevFilter,
              dateStart: date,
            }));
            setOpenStart(false);
          }}
          onCancel={() => setOpenStart(false)}
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
              <ReportListItem item={item} navigation={navigation} />
            )}
          />
        )}
      </SafeAreaView>
      {cycles && <ReportTotalData cycles={cycles} />}
    </View>
  );
};

export default Report;
