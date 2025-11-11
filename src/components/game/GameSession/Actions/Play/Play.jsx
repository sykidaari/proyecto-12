import useAlert from '@/hooks/useAlert.js';
import useGameContext from '@/hooks/useGameContext.js';
import useText from '@/hooks/useText.js';
import { play } from '@/reducers/game/actions.js';
import cN from '@/utils/classNameManager.js';
import Alert from '@c/game/Alert/Alert.jsx';
import { memo } from 'react';

const Play = ({ buttonClassName }) => {
  const { title, tooHungry: tooHungryText } = useText('game.actions.play');
  const {
    state: {
      isAwake,
      isPlaying,
      stats: { hunger }
    },
    dispatch
  } = useGameContext();
  const { alert, setAlert } = useAlert();

  const isTooHungry = hunger <= 2;

  const handleClick = () => {
    if (isTooHungry) return setAlert(true);

    play(dispatch);
  };

  return (
    <li>
      <button
        className={cN(
          buttonClassName,
          (!isAwake || isPlaying) && 'btn-disabled'
        )}
        onClick={handleClick}
      >
        {title}
      </button>

      {alert && (
        <Alert className='alert-error fixed top-25 left-1/2 -translate-x-1/2' x>
          {tooHungryText}
        </Alert>
      )}
    </li>
  );
};

export default memo(Play);
