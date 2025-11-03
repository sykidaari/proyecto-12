import useGameContext from '@/hooks/useGameContext.js';
import useText from '@/hooks/useText.js';
import cN from '@/utils/classNameManager.js';

const Stats = () => {
  const t = useText('game.stats');
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
            {t[key]}{' '}
            <progress
              value={value}
              max='100'
              className={cN(
                'progress w-full',

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

export default Stats;
