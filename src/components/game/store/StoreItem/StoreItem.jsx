import useStoreItemContext from '@/hooks/useStoreItemContext.js';
import cN from '@/utils/classNameManager.js';
import CheapEffect from '@c/game/store/StoreItem/CheapEffect/CheapEffect.jsx';
import StoreItemButton from '@c/game/store/StoreItem/StoreItemButton.jsx/StoreItemButton.jsx';
import StoreItemVisual from '@c/game/store/StoreItem/StoreItemVisual/StoreItemVisual.jsx';

const StoreItem = () => {
  const { isCheap, owned: isOwned } = useStoreItemContext();

  return (
    <li
      className={cN(
        'carousel-item card card-xs m-2.5 p-2.5 bg-base-200 shadow hover:scale-105 transition z-auto',
        '[&_img]:size-30 max-[200px]:[&_img]:size-20 [&_img]:object-contain [&_img]:object-center [&_img]:rounded-box',
        'group',
        isOwned && 'bg-base-200/50'
      )}
    >
      {isCheap && <CheapEffect />}

      <div className='size-full relative overflow-visible'>
        <StoreItemVisual />
        <div className='card-body card-actions pt-2.5 px-0'>
          <StoreItemButton />
        </div>
      </div>
    </li>
  );
};

export default StoreItem;
