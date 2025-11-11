export const INITIAL_GAME_STATE = {
  petName: '',
  gameOver: false,

  petSkin: 'Tamagotchi_iD_L',
  background: 8,

  ownedSkins: ['Tamagotchi_iD_L'],
  ownedBackgrounds: [8],
  ownedFoods: { kibble: 5, fruit: 2, candy: 1 },

  sprite: 'neutral',

  coins: 0,

  isAwake: true,
  isPlaying: false,

  stats: {
    hunger: 50,
    sleep: 50,
    fun: 50,

    happiness: 50
  }
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

    case 'SET_GAME_OVER': {
      return { ...state, gameOver: payload };
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

    case 'CHANGE_OWNED_FOODS': {
      const { food, amount } = payload;

      return {
        ...state,
        ownedFoods: {
          ...state.ownedFoods,
          [food]: state.ownedFoods[food] + amount
        }
      };
    }

    case 'SET_SPRITE': {
      return { ...state, sprite: payload };
    }

    case 'SET_IS_AWAKE': {
      return { ...state, isAwake: payload };
    }

    case 'SET_IS_PLAYING': {
      return { ...state, isPlaying: payload };
    }

    case 'CHANGE_COINS': {
      return {
        ...state,
        coins: Math.min(1000, Math.max(0, state.coins + payload))
      };
    }

    case 'CHANGE_STATS': {
      const newState = {
        ...state,
        stats: Object.fromEntries(
          Object.entries(state.stats).map(([key, value]) => [
            key,
            Math.min(100, Math.max(0, value + (payload[key] ?? 0)))
          ])
        )
      };

      const { fun, hunger, sleep } = newState.stats;
      const base = (fun + hunger + sleep) / 3;
      newState.stats.happiness = Math.max(0, Math.min(base, 100));

      return newState;
    }

    default:
      return state;
  }
};

export default gameReducer;
