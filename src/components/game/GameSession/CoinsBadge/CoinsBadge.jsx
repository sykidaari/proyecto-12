import useGameContext from '@/hooks/useGameContext.js';
import { CircleStackIcon } from '@heroicons/react/24/solid';
import { memo, useEffect, useRef } from 'react';

const CoinsBadge = () => {
  const {
    state: { coins }
  } = useGameContext();
  const ref = useRef(null);

  const prevCoins = useRef(coins);

  useEffect(() => {
    if (prevCoins.current !== coins) {
      const badge = ref.current;

      badge?.classList.add('animate-bounce');

      const timer = setTimeout(() => {
        badge.classList.remove('animate-bounce');
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [coins]);

  return (
    <div className='@container w-full'>
      <div className='badge bg-accent absolute left-5 top-5 h-fit p-2 gap-1 text-accent-content @max-sm:left-1.5 @max-sm:top-1.5'>
        <CircleStackIcon className='size-7' ref={ref} />
        <span className='text-sm font-bold'>{coins}</span>
      </div>
    </div>
  );
};

export default memo(CoinsBadge);
