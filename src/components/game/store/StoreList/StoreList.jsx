import useText from '@/hooks/useText.js';
import StoreItemProvider from '@/providers/StoreItem/StoreItemProvider.jsx';
import cN from '@/utils/classNameManager.js';
import StoreItem from '@c/game/store/StoreItem/StoreItem.jsx';
import { useMemo, useState } from 'react';

const StoreList = ({ type, items, src, owned, prices }) => {
  const t = useText('game.store.owned');

  // handle objects differently from arrays
  if (!Array.isArray(items)) items = Object.entries(items);

  const { list, fixed } = prices ?? {};
  const [low, high] = list ?? [];

  // src can be string, or object, if object can have 2 variations
  const { regular, alt } = src ?? {};
  src = typeof src === 'string' ? src : regular;

  const [cheapItems] = useState(() => {
    if (!prices || fixed) return [];
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  });

  const orderedItems = useMemo(() => {
    if (!prices || fixed) return items;

    const cheap = items.filter((item) => cheapItems.includes(item));
    const rest = items.filter((item) => !cheapItems.includes(item));
    return [...cheap, ...rest];
  }, [items, prices, fixed, cheapItems]);

  return (
    <div className='max-w-full'>
      {owned && <h4 className='menu-title'>{t}</h4>}

      <ul
        className={cN(
          'carousel bg-base-300 rounded-box carousel-center w-full',
          owned && 'bg-secondary/25'
        )}
      >
        {orderedItems.map((item, i) => {
          // differentiation for objects
          const name = item.length === 2 ? item[0] : item;

          const isCheap = cheapItems.includes(item);

          // fixed price when specified, otherwise low(cheap) or high(regular)
          const price = fixed ? list[i] : isCheap ? low : high;

          return (
            <StoreItemProvider
              key={i}
              item={{ type, name, owned, isCheap, src, alt, price }}
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
