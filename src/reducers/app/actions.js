export const setLanguage = (dispatch, value) =>
  dispatch({ type: 'SET_LANGUAGE', payload: value });

export const setAppTheme = (dispatch, value) => {
  const newTheme = value ? 'dark' : 'light';
  dispatch({ type: 'SET_THEME', payload: newTheme });
};

export const setAppSave = (dispatch, value) => {
  const newSave = value ? 'yes' : 'no';
  dispatch({ type: 'SET_SAVE', payload: newSave });
};

export const setMobileNavDrawer = (dispatch, value) =>
  dispatch({ type: 'SET_MOBILE_NAV_OPEN', payload: value });

export const setSettingsDrawer = (dispatch, value) =>
  dispatch({ type: 'SET_SETTINGS_OPEN', payload: value });
