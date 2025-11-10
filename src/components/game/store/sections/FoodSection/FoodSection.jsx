import foods from '@/data/foods.js';
import useText from '@/hooks/useText.js';
import StoreList from '@c/game/store/StoreList/StoreList.jsx';
import StoreSectionBase from '@c/game/store/StoreSectionBase/StoreSectionBase.jsx';

const FoodSection = () => {
  const t = useText('game.store.food');

  const { title } = t;

  return (
    <StoreSectionBase title={title}>
      <StoreList
        type='food'
        items={foods}
        src={'/foods/ITEM.svg'}
        prices={{ list: [10, 15, 25], fixed: true }}
      />
    </StoreSectionBase>
  );
};

export default FoodSection;
