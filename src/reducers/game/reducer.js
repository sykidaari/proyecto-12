export const INITIAL_GAME_STATE = {
  petName: '',

  petSkin: 'Tamagotchi_iD_L',
  background: 8,

  ownedSkins: ['Tamagotchi_iD_L'],
  ownedBackgrounds: ['close_up.gif'],

  sprite: 'neutral.webp',

  hunger: 50,
  sleep: 50,
  fun: 50,

  happinness: 50
};

const gameReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'RESET_GAME': {
      return { ...INITIAL_GAME_STATE };
    }
    case 'SET_PET_NAME': {
      return { ...state, petName: payload.trim().toUpperCase() };
    }

    case 'SET_PET_SKIN': {
      return { ...state, petSkin: payload };
    }

    case 'SET_BACKGROUND': {
      return { ...state, background: payload };
    }

    case 'ADD_OWNED_SKIN': {
      return { ...state, ownedSkins: [...state.ownedSkins, payload] };
    }

    case 'ADD_OWNED_BACKGROUND': {
      return {
        ...state,
        ownedBackgrounds: [...state.ownedBackgrounds, payload]
      };
    }
    case 'SET_SPRITE': {
      return { ...state, sprite: payload };
    }

    default:
      return state;
  }
};

export default gameReducer;
