export const getAuthIsLoggedIn = (state) => state.auth.auth.isLoggedIn;
export const getAuthIsLoading = (state) => state.auth.auth.isLoading;

export const getAuthUsername = (state) => state.auth.auth.name;
export const getAuthUserAvatar = (state) => state.auth.auth.avatar;
export const getAuthUserToken = (state) => state.auth.auth.token;
export const getAuthUserLanguage = (state) => state.auth.auth.inerfaceLanguage;

export const getAuthIsRefreshing = (state) => state.auth.auth.isRefreshing;
