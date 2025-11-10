import backgrounds from '@/data/backgrounds.js';
import useGameContext from '@/hooks/useGameContext.js';
import useText from '@/hooks/useText.js';
import StoreList from '@c/game/store/StoreList/StoreList.jsx';
import StoreSectionBase from '@c/game/store/StoreSectionBase/StoreSectionBase.jsx';

const BackgroundsSection = () => {
  const t = useText('game.store.backgrounds');
  const {
    state: { ownedBackgrounds }
  } = useGameContext();

  const { title } = t;

  const notOwnedBackgrounds = backgrounds.filter(
    (bg) => !ownedBackgrounds.includes(bg)
  );

  return (
    <StoreSectionBase title={title}>
      <StoreList
        type='background'
        items={notOwnedBackgrounds}
        src={'/petRooms/ITEM.webp'}
        prices={{ list: [50, 100] }}
      />
      <StoreList
        type='background'
        items={ownedBackgrounds}
        src={'/petRooms/ITEM.webp'}
        owned
      />
    </StoreSectionBase>
  );
};

export default BackgroundsSection;
