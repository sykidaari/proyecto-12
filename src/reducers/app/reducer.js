export const INITIAL_APP_STATE = {
  mobileNavOpen: false,
  settingsOpen: false,

  theme: localStorage.getItem('theme') || 'light',
  language: localStorage.getItem('language') || 'en',
  save: localStorage.getItem('save') || 'yes'
};

const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_MOBILE_NAV_OPEN': {
      return { ...state, mobileNavOpen: payload };
    }

    case 'SET_SETTINGS_OPEN': {
      return { ...state, settingsOpen: payload };
    }

    case 'SET_THEME': {
      localStorage.setItem('theme', payload);
      document.documentElement.setAttribute('data-theme', payload);
      return { ...state, theme: payload };
    }

    case 'SET_LANGUAGE': {
      localStorage.setItem('language', payload);
      return { ...state, language: payload };
    }

    case 'SET_SAVE': {
      localStorage.setItem('save', payload);
      return { ...state, save: payload };
    }

    default:
      return state;
  }
};

export default appReducer;
