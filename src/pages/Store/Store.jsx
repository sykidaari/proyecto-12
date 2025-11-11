import CoinsBadge from '@c/game/CoinsBadge/CoinsBadge.jsx';
import GameNotStartedModal from '@c/game/store/GameNotStartedModal/GameNotStartedModal.jsx';
import BackgroundsSection from '@c/game/store/sections/BackgroundsSection/BackgroundsSection.jsx';
import FoodSection from '@c/game/store/sections/FoodSection/FoodSection.jsx';
import SkinsSection from '@c/game/store/sections/SkinsSection/SkinsSection.jsx';

const Store = () => {
  return (
    <div className='h-full w-full overflow-y-auto px-5 pb-10 pt-20 max-[200px]:px-2.5'>
      <CoinsBadge className='fixed right-5 top-20 badge-warning  max-[200px]:right-2.5' />

      <FoodSection />
      <div className='divider' />
      <SkinsSection />
      <div className='divider' />
      <BackgroundsSection />

      <GameNotStartedModal />
    </div>
  );
};

export default Store;
