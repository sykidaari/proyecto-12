import useGameContext from '@/hooks/useGameContext.js';
import { CircleStackIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef } from 'react';

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
    <div
      className='badge bg-accent absolute left-5 top-5 h-fit p-2 gap-1 text-accent-content'
      data-pet-coins-css
    >
      <CircleStackIcon className='size-7' ref={ref} />
      <span className='text-sm font-bold'>{coins}</span>
    </div>
  );
};

export default CoinsBadge;
