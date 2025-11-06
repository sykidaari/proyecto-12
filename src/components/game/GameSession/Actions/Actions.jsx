import Feed from '@c/game/GameSession/Actions/Feed/Feed.jsx';
import Play from '@c/game/GameSession/Actions/Play/Play.jsx';
import Sleep from '@c/game/GameSession/Actions/Sleep/Sleep.jsx';
import { memo } from 'react';

const Actions = () => {
  const buttonClassName = 'btn btn-secondary w-full px-0';

  return (
    <ul className='card-actions mt-2.5 gap-1 justify-center flex-nowrap *:max-w-32/100 *:w-full *:flex max-[300px]:flex-col max-[300px]:*:max-w-full'>
      <Sleep buttonClassName={buttonClassName} />
      <Feed buttonClassName={buttonClassName} />
      <Play buttonClassName={buttonClassName} />
    </ul>
  );
};

export default memo(Actions);
