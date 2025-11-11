import AppContext from '@/providers/App/AppContext.js';
import appReducer, { INITIAL_APP_STATE } from '@/reducers/app/reducer';
import { useReducer } from 'react';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_APP_STATE, () => ({
    ...INITIAL_APP_STATE,

    // GET SETTINGS FROM LOCALSTORAGE
    theme: localStorage.getItem('theme') || 'light',
    language: localStorage.getItem('language') || 'en',
    save: localStorage.getItem('save') || 'yes'
  }));

  const { theme } = state;

  document.documentElement.setAttribute('data-theme', theme);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
