import useGameContext from '@/hooks/useGameContext.js';
import useText from '@/hooks/useText.js';
import { feed } from '@/reducers/game/actions.js';
import cN from '@/utils/classNameManager.js';
import React, { useEffect, useRef } from 'react';

const Feed = ({ buttonClassName }) => {
  const t = useText('game.actions.feed');
  const {
    state: { ownedFoods, sprite, isAwake, isPlaying },
    dispatch
  } = useGameContext();
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      ref.current.open = false;
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const { title, noneLeft } = t;

  const handleClick = (food) => {
    feed(dispatch, food, sprite);
    ref.current.open = false;
  };

  const noFoodLeft = Object.values(ownedFoods).every((amount) => amount === 0);

  return (
    <li>
      <details className='dropdown w-full' ref={ref}>
        <summary
          className={cN(
            buttonClassName,
            (!isAwake || isPlaying) && 'btn-disabled'
          )}
        >
          {title}
        </summary>
        <ul className='menu dropdown-content bg-secondary/50 backdrop-blur-xs rounded-box shadow-sm w-20 !z-1 relative bottom-10 left-1/2 -translate-x-1/2'>
          {noFoodLeft ? (
            <li>{noneLeft}</li>
          ) : (
            Object.entries(ownedFoods).map(([food, amount]) =>
              amount > 0 ? (
                <li key={food} onClick={() => handleClick(food)}>
                  <div className='pl-0'>
                    <img
                      src={`/foods/${food}.svg`}
                      alt='food-item'
                      className='w-8'
                    />
                    {amount}
                  </div>
                </li>
              ) : null
            )
          )}
        </ul>
      </details>
    </li>
  );
};

export default Feed;
