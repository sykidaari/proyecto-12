export const INITIAL_APP_STATE = {
  mobileNavOpen: false,
  settingsOpen: false,

  theme: localStorage.getItem('theme') || 'light',
  language: localStorage.getItem('language') || 'en'
};

export function appReducer(state, action) {
  switch (action.type) {
    case 'SET_MOBILE_NAV_OPEN': {
      const isOpen = action.payload;

      return { ...state, mobileNavOpen: isOpen };
    }

    case 'SET_SETTINGS_OPEN': {
      const isOpen = action.payload;

      return { ...state, settingsOpen: isOpen };
    }

    case 'SET_THEME': {
      const newTheme = action.payload;
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      return { ...state, theme: newTheme };
    }

    case 'SET_LANGUAGE': {
      const newLang = action.payload;
      localStorage.setItem('language', newLang);
      return { ...state, language: newLang };
    }

    default:
      return state;
  }
}
