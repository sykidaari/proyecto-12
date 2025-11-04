import backgrounds from '@/data/backgrounds.js';
import foods from '@/data/foods.js';
import petSkins from '@/data/petSkins.js';
import useText from '@/hooks/useText.js';
import StoreSection from '@c/game/StoreSection/StoreSection.jsx';

const Store = () => {
  const t = useText('game.store');

  const {
    food: { title: foodTitle },
    skins: { title: skinsTitle },
    backgrounds: { title: backgroundsTitle }
  } = t;

  return (
    <div className='h-full overflow-y-auto'>
      <StoreSection title={foodTitle} items={foods} src={'/foods/ITEM.svg'} />
      <StoreSection
        title={skinsTitle}
        items={petSkins}
        src={'/petSprites/ITEM/neutral.webp'}
      />
      <StoreSection
        title={backgroundsTitle}
        items={backgrounds}
        src={'/petRooms/ITEM.webp'}
      />
    </div>
  );
};

export default Store;
