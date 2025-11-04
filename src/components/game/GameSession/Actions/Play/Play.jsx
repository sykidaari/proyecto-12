import useGameContext from '@/hooks/useGameContext.js';
import useText from '@/hooks/useText.js';
import { play } from '@/reducers/game/actions.js';
import cN from '@/utils/classNameManager.js';
import { memo } from 'react';

const Play = ({ buttonClassName }) => {
  const t = useText('game.actions.play');
  const {
    state: { isAwake, isPlaying },
    dispatch
  } = useGameContext();

  const handleClick = () => play(dispatch);
  return (
    <li>
      <button
        className={cN(
          buttonClassName,
          (!isAwake || isPlaying) && 'btn-disabled'
        )}
        onClick={handleClick}
      >
        {t}
      </button>
    </li>
  );
};

export default memo(Play);
