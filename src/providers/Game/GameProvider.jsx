import GameContext from '@/providers/Game/GameContext.js';
import gameReducer, { INITIAL_GAME_STATE } from '@/reducers/game/reducer.js';
import { useReducer } from 'react';

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_GAME_STATE);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
