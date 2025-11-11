import useGameContext from '@/hooks/useGameContext.js';
import usePetNavigate from '@/hooks/usePetNavigate.js';
import useText from '@/hooks/useText.js';
import cN from '@/utils/classNameManager.js';
import ResetModal from '@c/game/ResetModal/ResetModal.jsx';
import StyledPetName from '@c/game/StyledPetName/StyledPetName.jsx';
import { useRef } from 'react';

const StartButtons = () => {
  const { startNew, continueCurrent } = useText('app.home');
  const {
    state: { petName: gameStarted }
  } = useGameContext();

  const modalRef = useRef(null);
  const navigateToPet = usePetNavigate();

  // IF THERE'S AN ONGOING GAME, ASK FOR COMFIRMATION ON WHETHER TO DELETE AND START NEW
  const handleStartButtonClick = () =>
    gameStarted ? modalRef.current?.showModal() : navigateToPet();

  const handleContinueButtonClick = () => navigateToPet();

  return (
    <div className='card-actions mt-3 justify-center w-full max-w-xs sm:max-w-full  [&>button]:btn-block [&>button]:rounded-full'>
      {/* START GAME BUTTON */}
      <button
        className={cN('btn', gameStarted ? 'btn-soft' : 'btn-secondary')}
        onClick={handleStartButtonClick}
      >
        {startNew}
      </button>

      {gameStarted && (
        <>
          <ResetModal ref={modalRef} option='standard' />

          {/* CONTINUE GAME BUTTON */}
          <button
            onClick={handleContinueButtonClick}
            className='btn btn-secondary gap-1 flex-wrap min-h-fit'
          >
            {continueCurrent} <StyledPetName bolder />
          </button>
        </>
      )}
    </div>
  );
};

export default StartButtons;
