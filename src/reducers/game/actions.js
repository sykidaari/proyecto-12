import existingFoods from '@/data/foods.js';

export const resetGame = (dispatch) => dispatch({ type: 'RESET_GAME' });

export const revive = (dispatch, state) => {
  const { ownedFoods } = state;

  dispatch({ type: 'SET_GAME_OVER', payload: false });

  dispatch({
    type: 'CHANGE_STATS',
    payload: { sleep: 20, hunger: 20, fun: 20 }
  });

  const noFoodLeft = Object.values(ownedFoods).every((value) => value === 0);

  if (noFoodLeft)
    dispatch({
      type: 'CHANGE_OWNED_FOODS',
      payload: { food: 'kibble', amount: 5 }
    });
};

export const gameLoop = (dispatch, stateRef, appStateRef) => {
  const interval = setInterval(() => {
    const { isAwake, isPlaying, stats, sprite } = stateRef.current;
    const { happiness } = stats;

    const { mobileNavOpen, settingsOpen } = appStateRef.current;

    // LOOP PAUSED WHEN SLEEPING, PLAYING OR A MENU IS OPEN
    if (!isAwake || isPlaying || mobileNavOpen || settingsOpen) return;

    // CHECK IF STATS 0
    const gameOver = Object.values(stats).every((stat) => stat === 0);
    if (gameOver) {
      dispatch({ type: 'SET_GAME_OVER', payload: true });
      clearInterval(interval);
      return;
    }

    // CONSTANT STATS DECAY
    dispatch({
      type: 'CHANGE_STATS',
      payload: { hunger: -0.5, fun: -0.3, sleep: -0.2 }
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

//
//
// GAME BUTTON ACTIONS

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

//
//
// STORE ACTIONS

export const select = (dispatch, type, name) => {
  const dType =
    type === 'skin' ? 'PET_SKIN' : type === 'background' && 'BACKGROUND';

  dispatch({ type: `SET_${dType}`, payload: name });
};

export const buy = (dispatch, type, name, price) => {
  if (type === 'food')
    dispatch({
      type: 'CHANGE_OWNED_FOODS',
      payload: { food: name, amount: 1 }
    });
  else {
    const dType =
      type === 'skin' ? 'SKIN' : type === 'background' && 'BACKGROUND';
    dispatch({ type: `ADD_OWNED_${dType}`, payload: name });
  }

  dispatch({ type: 'CHANGE_COINS', payload: -price });
};
