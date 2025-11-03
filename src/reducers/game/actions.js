import existingFoods from '@/data/foods.js';

export const resetGame = (dispatch) => dispatch({ type: 'RESET_GAME' });

export const gameLoop = (dispatch, state) => {
  const { isAwake, isPlaying, stats, sprite } = state;
  const { happiness } = stats;

  // LOOP PAUSED WHEN SLEEPING
  if (!isAwake || isPlaying) return;

  const interval = setInterval(() => {
    // CONSTANT STATS DECAY
    dispatch({
      type: 'CHANGE_STATS',
      payload: { hunger: -0.5, fun: -0.3, sleep: -0.1 }
    });

    // SPRITE DEPENDS ON STATS (EXCEPT WHEN SLEEPING, PLAYING OR EATING)
    let newSprite = sprite;

    newSprite =
      happiness > 75
        ? 'happy'
        : happiness > 40
        ? 'neutral'
        : happiness > 20
        ? 'sad'
        : 'angry';

    // IF ANY STAT IS 10 OR LESS, SRITE IS SHOCKED
    if (Object.values(stats).some((stat) => stat <= 10)) newSprite = 'shocked';

    // SPRITE IS ONLY UPDATED IN INTERVAL WHEN NECESSARY
    if (newSprite !== sprite)
      dispatch({ type: 'SET_SPRITE', payload: newSprite });

    // RECEIVE COINS IF PET HAPPY
    const coins = happiness > 90 ? 2 : happiness > 75 ? 1 : null;
    if (coins) dispatch({ type: 'CHANGE_COINS', payload: coins });
  }, 1000);

  return () => clearInterval(interval);
};

export const feed = (dispatch, food, prevSprite) => {
  // STATS FOR EACH FOODS ARE PREDEFINED
  const item = existingFoods[food];
  const { hungerPoints, funPoints, coins } = item;

  dispatch({ type: 'CHANGE_OWNED_FOODS', payload: { food, amount: -1 } });

  dispatch({
    type: 'CHANGE_STATS',
    payload: { hunger: hungerPoints, fun: funPoints }
  });

  dispatch({ type: 'CHANGE_COINS', payload: coins });

  dispatch({ type: 'SET_SPRITE', payload: 'blushing' });
  setTimeout(() => {
    dispatch({ type: 'SET_SPRITE', payload: prevSprite });
  }, 1000);
};

export const putToSleep = (dispatch) => {
  dispatch({ type: 'SET_IS_AWAKE', payload: false });

  const interval = setInterval(() => {
    dispatch({ type: 'CHANGE_STATS', payload: { sleep: 2.5 } });
  }, 500);

  return interval;
};

export const wakeUp = (dispatch, interval) => {
  dispatch({ type: 'SET_IS_AWAKE', payload: true });
  clearInterval(interval);
};

export const play = (dispatch) => {
  dispatch({ type: 'SET_IS_PLAYING', payload: true });

  const interval = setInterval(() => {
    dispatch({
      type: 'CHANGE_STATS',

      // PLAYING HAS BENEFIT AND DEFICIT SO PLAYER CAN'T "GRIND" IT
      payload: { hunger: -2, sleep: -2, fun: 4 }
    });
  }, 500);

  setTimeout(() => {
    clearInterval(interval);

    dispatch({ type: 'SET_IS_PLAYING', payload: false });
  }, 2500);
};
