import useGameContext from '@/hooks/useGameContext.js';
import usePetNavigate from '@/hooks/usePetNavigate.js';
import useText from '@/hooks/useText.js';
import { resetGame, revive } from '@/reducers/game/actions.js';
import StyledPetName from '@c/game/StyledPetName/StyledPetName.jsx';

// REACT 19 ACEPTA REF DENTRO DE LOS PROPS
const ResetModal = ({ ref, option, revival }) => {
  const { title, yes, no } = useText(`game.resetModal.${option}`);
  const { state, dispatch } = useGameContext();
  const navigateToPet = usePetNavigate();

  const handleYesClick = () => {
    resetGame(dispatch);
    navigateToPet();
  };
  const handleNoClick = () => {
    ref.current?.close();

    if (revival) revive(dispatch, state);
  };

  return (
    <dialog className='modal' ref={ref}>
      <div className='modal-box'>
        <h4 className='text-center'>
          {title[0]} {<StyledPetName />} {title[1]}
        </h4>
        <div className='modal-action justify-center'>
          {' '}
          <button className='btn btn-success' onClick={handleYesClick}>
            {yes}
          </button>
          <button className='btn btn-error' onClick={handleNoClick}>
            {no}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ResetModal;
