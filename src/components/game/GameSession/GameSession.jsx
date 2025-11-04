import PetVisual from '@c/game/GameSession/PetVisual/PetVisual.jsx';
import './GameSession.css';
import CoinsBadge from '@c/game/GameSession/CoinsBadge/CoinsBadge.jsx';
import Stats from '@c/game/GameSession/Stats/Stats.jsx';
import Actions from '@c/game/GameSession/Actions/Actions.jsx';
import { useEffect } from 'react';
import useGameContext from '@/hooks/useGameContext.js';
import { gameLoop } from '@/reducers/game/actions.js';
import useAppContext from '@/hooks/useAppContext.js';

const GameSession = () => {
  // ALL CHILDREN OF GAMESESSION ALL ARE MEMOED SO THEY REMAIN UNAFFECTED BY APPSTATE, AS APPSTATE IS ONLY USED IN REDUCER ACTION (GAMELOOP)

  const { state: appState } = useAppContext();

  const { state, dispatch } = useGameContext();

  useEffect(() => {
    const stop = gameLoop(dispatch, state, appState);

    return stop;
  }, [dispatch, state, appState]);

  return (
    <section className='card items-center shadow shadow-accent mx-5 max-w-sm h-fit'>
      <PetVisual />
      <CoinsBadge />
      <div className='card-body w-full' data-pet-body-css>
        <Stats />
        <Actions />
      </div>
    </section>
  );
};

export default GameSession;
