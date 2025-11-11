import useAlert from '@/hooks/useAlert.js';
import useGameContext from '@/hooks/useGameContext.js';
import useStoreItemContext from '@/hooks/useStoreItemContext.js';
import useText from '@/hooks/useText.js';
import { buy, select } from '@/reducers/game/actions.js';
import cN from '@/utils/classNameManager.js';
import Alert from '@c/game/Alert/Alert.jsx';
import { CircleStackIcon } from '@heroicons/react/24/solid';

const StoreItemButton = () => {
  const {
    buy: buyText,
    select: selectText,
    inUse: inUse,
    tooExpensive
  } = useText('game.store');
  const {
    type,
    name,
    isCheap,
    price,
    price: isForSale,
    owned: isOwned
  } = useStoreItemContext();
  const {
    state: { coins, petSkin: currentPetSkin, background: currentBackground },
    dispatch
  } = useGameContext();

  console.log(isForSale);

  const { alert, setAlert } = useAlert();

  const isInUse = name === currentPetSkin || name === currentBackground;

  const isTooExpensive = price > coins;

  const handleClick = () => {
    if (isOwned) select(dispatch, type, name);
    else if (isTooExpensive) setAlert(true);
    else buy(dispatch, type, name, price);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={cN(
          'btn btn-block btn-accent group/button',
          isCheap && 'btn-info',
          isTooExpensive && 'btn-error!',
          isOwned && 'btn-secondary',
          isInUse && 'btn-disabled'
        )}
      >
        {isForSale && (
          <CircleStackIcon className='size-2.5 group-hover/button:hidden' />
        )}

        {/* FOR ALL ITEMS; BUT CLASSNAME IS FOR TEXT ALTERNATION ON BUYABLE ITEMS */}
        <span className={cN(isForSale && 'group-hover/button:hidden')}>
          {price || (isInUse && inUse) || selectText}
        </span>
        {/* TEXT ALTERNATION FOR ITEMS YOU CAN BUY */}
        <span className={cN('hidden', isForSale && 'group-hover/button:block')}>
          {buyText}
        </span>
      </button>

      {alert && (
        <Alert
          className='alert-error alert-soft alert-vertical w-full text-balance absolute z-100 -top-1.5 left-1/2 -translate-x-1/2 group-hover:!none'
          x
        >
          {tooExpensive}
        </Alert>
      )}
    </>
  );
};

export default StoreItemButton;
