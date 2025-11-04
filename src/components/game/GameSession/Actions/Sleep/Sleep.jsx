import useGameContext from '@/hooks/useGameContext.js';
import useText from '@/hooks/useText.js';
import { putToSleep, wakeUp } from '@/reducers/game/actions.js';
import cN from '@/utils/classNameManager.js';
import { memo, useRef } from 'react';

const Sleep = ({ buttonClassName }) => {
  const t = useText('game.actions');
  const {
    state: { isAwake, isPlaying },
    dispatch
  } = useGameContext();
  const intervalRef = useRef(null);

  const { sleep: sleepText, wakeUp: wakeUpText } = t;

  const handleClick = () => {
    if (isAwake) {
      intervalRef.current = putToSleep(dispatch);
    } else wakeUp(dispatch, intervalRef.current);
  };

  return (
    <li className='justify-end'>
      <button
        className={cN(buttonClassName, isPlaying && 'btn-disabled')}
        onClick={handleClick}
      >
        {isAwake ? sleepText : wakeUpText}
      </button>
    </li>
  );
};

export default memo(Sleep);
