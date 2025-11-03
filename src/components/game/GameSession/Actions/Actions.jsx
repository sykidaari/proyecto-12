import Feed from '@c/game/GameSession/Actions/Feed/Feed.jsx';
import Play from '@c/game/GameSession/Actions/Play/Play.jsx';
import Sleep from '@c/game/GameSession/Actions/Sleep/Sleep.jsx';

const Actions = () => {
  const buttonClassName = 'btn btn-secondary w-full px-0';

  return (
    <ul className='card-actions mt-2.5 gap-1 flex-nowrap *:max-w-32/100 *:w-full *:flex'>
      <Sleep buttonClassName={buttonClassName} />
      <Feed buttonClassName={buttonClassName} />
      <Play buttonClassName={buttonClassName} />
    </ul>
  );
};

export default Actions;
