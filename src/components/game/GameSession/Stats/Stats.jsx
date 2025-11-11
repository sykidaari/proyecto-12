import useGameContext from '@/hooks/useGameContext.js';
import useText from '@/hooks/useText.js';
import cN from '@/utils/classNameManager.js';
import { memo } from 'react';

const Stats = () => {
  const statNames = useText('game.stats');
  const {
    state: { stats }
  } = useGameContext();

  return (
    <ul className='list'>
      {Object.entries(stats).map(([key, value]) => {
        const happinessStat = key === 'happiness';

        return (
          <li
            key={key}
            className={cN('text-xs', happinessStat && 'font-semibold mt-5')}
          >
            {statNames[key]}{' '}
            <progress
              value={value}
              max='100'
              className={cN(
                'progress w-full',

                // color depends on value, except for happinnessBar, it's always primary
                happinessStat
                  ? 'progress-primary'
                  : value < 25
                  ? 'progress-error'
                  : value < 50
                  ? 'progress-warning'
                  : 'progress-success'
              )}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default memo(Stats);
