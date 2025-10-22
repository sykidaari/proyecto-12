import AppContext from '@/providers/App/AppContext.js';
import { appReducer, INITIAL_APP_STATE } from '@/reducers/app/reducer';
import { useReducer } from 'react';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_APP_STATE);
  const { theme } = state;

  document.documentElement.setAttribute('data-theme', theme);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
