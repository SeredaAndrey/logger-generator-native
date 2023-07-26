import { IntlProvider } from "react-intl";
import { Text, View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { Provider, useDispatch, useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";

import { AppStyles } from "./AppSttyled";

import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import authSelector from "./redux/auth/authSelector";
import { store, persistor } from "./redux/store";
import { refreshUser } from "./redux/auth/authOperations";

SplashScreen.preventAutoHideAsync();

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const language = useSelector(authSelector.getUserLanguage);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const isAuthLoading = useSelector(authSelector.getIsLoading);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          JuraReg: require("./assets/Jura/static/Jura-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const routing = useRoute(isLoggedIn);

  if (!appIsReady) {
    return null;
  }

  const locales = () => {
    switch (language) {
      case "en":
        return LOCALES.ENGLISH;
      case "ru":
        return LOCALES.RUSSIAN;
      case "ua":
        return LOCALES.UKRAINIAN;
      default:
        return LOCALES.ENGLISH;
    }
  };

  return (
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <Spinner
        visible={isAuthLoading}
        textContent={"Loading..."}
        textStyle={AppStyles.spinnerTextStyle}
        overlayColor="rgba(0, 0, 0, 0.5)"
        animation="fade"
      />
      <IntlProvider
        messages={messages[locales()]}
        locale={locales()}
        defaultLocale={LOCALES.ENGLISH}
      >
        <NavigationContainer>
          <View style={AppStyles.container} onLayout={onLayoutRootView}>
            {routing}
          </View>
        </NavigationContainer>
      </IntlProvider>
    </PersistGate>
  );
}
