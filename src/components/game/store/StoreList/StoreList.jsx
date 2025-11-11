import useText from '@/hooks/useText.js';
import StoreItemProvider from '@/providers/StoreItem/StoreItemProvider.jsx';
import cN from '@/utils/classNameManager.js';
import StoreItem from '@c/game/store/StoreItem/StoreItem.jsx';
import { useMemo, useState } from 'react';

const StoreList = ({
  // double desrtructures when 2 different uses, for clarity
  type,
  items,
  src,
  owned,
  owned: itemsAreOwned,
  prices,
  prices: itemsAreForSale
}) => {
  const ownedText = useText('game.store.owned');

  // handle objects differently from arrays
  if (!Array.isArray(items)) items = Object.entries(items);

  const { list: priceList, fixed: itemsHaveFixedPrices } =
    itemsAreForSale ?? {};
  const [low, high] = priceList ?? [];

  // src can be string, or object, if object can have 2 variations
  const { regular, alt: altSrc } = src ?? {};
  src = typeof src === 'string' ? src : regular;

  const [cheapItems] = useState(() => {
    if (!itemsAreForSale || itemsHaveFixedPrices) return [];
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  });

  const orderedItems = useMemo(() => {
    if (!itemsAreForSale || itemsHaveFixedPrices) return items;

    const cheap = items.filter((item) => cheapItems.includes(item));
    const rest = items.filter((item) => !cheapItems.includes(item));
    return [...cheap, ...rest];
    // eslint-disable-next-line
  }, [items, prices]);

  return (
    <div className='max-w-full'>
      {/* SUBTITLE FOR OWNED ITEMS */}
      {itemsAreOwned && <h4 className='menu-title'>{ownedText}</h4>}

      <ul
        className={cN(
          'carousel bg-base-300 rounded-box carousel-center w-full',
          itemsAreOwned && 'bg-secondary/25'
        )}
      >
        {orderedItems.map((item, i) => {
          // differentiation for objects
          const name = item.length === 2 ? item[0] : item;

          const isCheap = cheapItems.includes(item);

          // fixed price when specified, otherwise low(cheap) or high(regular)
          const price = itemsHaveFixedPrices
            ? priceList[i]
            : isCheap
            ? low
            : high;

          return (
            // PROVIDER FOR EACH SEPARATE ITEM, TO AVOID PROP DRILLING
            <StoreItemProvider
              key={i}
              item={{ type, name, owned, isCheap, src, altSrc, price }}
            >
              <StoreItem />
            </StoreItemProvider>
          );
        })}
      </ul>
    </div>
  );
};

export default StoreList;
