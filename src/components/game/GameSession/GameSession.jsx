import PetVisual from '@c/game/GameSession/PetVisual/PetVisual.jsx';
import CoinsBadge from '@c/game/CoinsBadge/CoinsBadge.jsx';
import Stats from '@c/game/GameSession/Stats/Stats.jsx';
import Actions from '@c/game/GameSession/Actions/Actions.jsx';
import { useEffect, useRef } from 'react';
import useGameContext from '@/hooks/useGameContext.js';
import { gameLoop } from '@/reducers/game/actions.js';
import useAppContext from '@/hooks/useAppContext.js';
import ResetModal from '@c/game/ResetModal/ResetModal.jsx';

const GameSession = () => {
  // ALL CHILDREN OF GAMESESSION ALL ARE MEMOED SO THEY REMAIN UNAFFECTED BY APPSTATE, AS APPSTATE IS ONLY USED IN REDUCER ACTION (GAMELOOP)

  const { state: appState } = useAppContext();
  const { state, dispatch } = useGameContext();
  const { gameOver } = state;

  const stateRef = useRef(state);
  const appStateRef = useRef(appState);
  const modalRef = useRef(null);

  useEffect(() => {
    stateRef.current = state;
    appStateRef.current = appState;
  }, [state, appState]);

  useEffect(() => {
    if (gameOver) {
      modalRef.current?.showModal();
      return;
    }

    const stop = gameLoop(dispatch, stateRef, appStateRef);
    return stop;
    // eslint-disable-next-line
  }, [gameOver]);

  return (
    <section className='card items-center shadow shadow-accent m-5 max-w-sm h-fit [@media(max-height:750px)]:my-2.5'>
      <PetVisual />

      <CoinsBadge className='badge-accent absolute left-5 top-5 @max-sm:left-1.5 @max-sm:top-1.5' />

      <div className='card-body w-full max-[350px]:p-4 [@media(max-height:650px)]:py-2'>
        <Stats />
        <Actions />
      </div>

      <ResetModal ref={modalRef} option='gameOver' revival></ResetModal>
    </section>
  );
};

export default GameSession;
