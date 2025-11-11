export const INITIAL_APP_STATE = {
  mobileNavIsOpen: false,
  settingsIsOpen: false,

  theme: 'light',
  language: 'en',
  save: 'yes'
};

const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_MOBILE_NAV_OPEN': {
      return { ...state, mobileNavIsOpen: payload };
    }

    case 'SET_SETTINGS_OPEN': {
      return { ...state, settingsIsOpen: payload };
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
