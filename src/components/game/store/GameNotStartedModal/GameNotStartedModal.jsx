import useGameContext from '@/hooks/useGameContext.js';
import useText from '@/hooks/useText.js';
import { Link } from 'react-router-dom';

const GameNotStartedModal = () => {
  const {
    state: { petName }
  } = useGameContext();
  const t = useText('game.store.gameNotStarted');

  const { title, homeButton } = t;

  return (
    <>
      {!petName && (
        <dialog className='modal modal-open'>
          <div className='modal-box text-center flex flex-col items-center gap-5'>
            <h4>{title}</h4>
            <Link to='/home' className='btn btn-ghost'>
              {homeButton}
            </Link>
          </div>
        </dialog>
      )}
    </>
  );
};

export default GameNotStartedModal;
