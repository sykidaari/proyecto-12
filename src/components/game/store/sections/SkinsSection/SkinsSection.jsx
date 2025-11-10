import petSkins from '@/data/petSkins.js';
import useGameContext from '@/hooks/useGameContext.js';
import useText from '@/hooks/useText.js';
import StoreList from '@c/game/store/StoreList/StoreList.jsx';
import StoreSectionBase from '@c/game/store/StoreSectionBase/StoreSectionBase.jsx';

const SkinsSection = () => {
  const t = useText('game.store.skins');
  const {
    state: { ownedSkins }
  } = useGameContext();

  const { title } = t;

  const notOwnedSkins = petSkins.filter((skin) => !ownedSkins.includes(skin));

  const src = {
    regular: '/petSprites/ITEM/neutral.webp',
    alt: '/petSprites/ITEM/close_up.gif'
  };

  return (
    <StoreSectionBase title={title}>
      <StoreList
        type='skin'
        items={notOwnedSkins}
        src={src}
        prices={{ list: [40, 80] }}
      />

      <StoreList type='skin' items={ownedSkins} src={src} owned />
    </StoreSectionBase>
  );
};

export default SkinsSection;
