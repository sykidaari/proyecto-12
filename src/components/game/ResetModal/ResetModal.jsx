import useGameContext from '@/hooks/useGameContext.js';
import usePetNavigate from '@/hooks/usePetNavigate.js';
import useText from '@/hooks/useText.js';
import { resetGame } from '@/reducers/game/actions.js';
import StyledPetName from '@c/game/StyledPetName/StyledPetName.jsx';

// REACT 19 ACEPTA REF DENTRO DE LOS PROPS
const ResetModal = ({ ref }) => {
  const t = useText('game.resetModal');
  const { dispatch } = useGameContext();
  const navigateToPet = usePetNavigate();

  const { title, yes, no } = t;

  const handleYesClick = () => {
    resetGame(dispatch);
    navigateToPet();
  };
  const handleNoClick = () => ref.current?.close();

  return (
    <dialog className='modal' ref={ref}>
      <div className='modal-box'>
        <h4>
          {title[0]} <span className='app-pet-name'>{<StyledPetName />}</span>{' '}
          {title[1]}
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
