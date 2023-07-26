const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getIsLoading = (state) => state.auth.isLoading;

const getUsername = (state) => state.auth.name;
const getUserAvatar = (state) => state.auth.avatar;
const getUserToken = (state) => state.auth.token;
const getUserLanguage = (state) => state.auth.inerfaceLanguage;

const getIsRefreshing = (state) => state.auth.isRefreshing;

const authSelector = {
  getIsLoggedIn,
  getIsLoading,
  getUsername,
  getUserAvatar,
  getUserToken,
  getUserLanguage,
  getIsRefreshing,
};

export default authSelector;
