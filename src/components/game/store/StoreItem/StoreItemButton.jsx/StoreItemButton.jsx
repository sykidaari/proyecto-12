import useAlert from '@/hooks/useAlert.js';
import useGameContext from '@/hooks/useGameContext.js';
import useStoreItemContext from '@/hooks/useStoreItemContext.js';
import useText from '@/hooks/useText.js';
import { buy, select } from '@/reducers/game/actions.js';
import cN from '@/utils/classNameManager.js';
import Alert from '@c/game/Alert/Alert.jsx';
import { CircleStackIcon } from '@heroicons/react/24/solid';

const StoreItemButton = () => {
  const { type, name, isCheap, price, owned } = useStoreItemContext();

  const {
    state: { coins, petSkin, background },
    dispatch
  } = useGameContext();
  const { alert, setAlert } = useAlert();

  const t = useText('game.store');
  const {
    buy: buyT,
    select: selectT,
    inUse: inUseT,
    tooExpensive: tooExpensiveT
  } = t;

  const inUse = name === petSkin || name === background;

  const tooExpensive = price > coins;

  const handleClick = () => {
    if (owned) select(dispatch, type, name);
    else if (tooExpensive) setAlert(true);
    else buy(dispatch, type, name, price);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={cN(
          'btn btn-block btn-accent group/button',
          isCheap && 'btn-info',
          tooExpensive && 'btn-error!',
          owned && 'btn-secondary',
          inUse && 'btn-disabled'
        )}
      >
        {price && (
          <CircleStackIcon className='size-2.5 group-hover/button:hidden' />
        )}

        <span className={cN(price && 'group-hover/button:hidden')}>
          {price || inUseT || selectT}
        </span>
        <span className={cN('hidden', price && 'group-hover/button:block')}>
          {buyT}
        </span>
      </button>

      {alert && (
        <Alert
          className='alert-error alert-soft alert-vertical w-full text-balance absolute z-100 -top-1.5 left-1/2 -translate-x-1/2 group-hover:!none'
          x
        >
          {tooExpensiveT}
        </Alert>
      )}
    </>
  );
};

export default StoreItemButton;
