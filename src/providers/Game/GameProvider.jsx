import useAppContext from '@/hooks/useAppContext.js';
import GameContext from '@/providers/Game/GameContext.js';
import gameReducer, { INITIAL_GAME_STATE } from '@/reducers/game/reducer.js';
import { useEffect, useReducer } from 'react';

const GameProvider = ({ children }) => {
  const {
    state: { save }
  } = useAppContext();

  const [state, dispatch] = useReducer(gameReducer, INITIAL_GAME_STATE, () => {
    if (save === 'yes') {
      // GET SAVED GAME
      const saved = localStorage.getItem('gameState');
      if (saved) return JSON.parse(saved);
    }
    return INITIAL_GAME_STATE;
  });

  useEffect(() => {
    if (save === 'no') {
      // REMOVE SAVED GAME
      localStorage.removeItem('gameState');
      return;
    }

    // SAVE GAME
    localStorage.setItem('gameState', JSON.stringify(state));
  }, [state, save]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
