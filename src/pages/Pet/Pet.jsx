import useGameContext from '@/hooks/useGameContext.js';
import GameSession from '@c/game/GameSession/GameSession.jsx';
import NamePetForm from '@c/game/NamePetForm/NamePetForm.jsx';

const Pet = () => {
  const {
    state: { petName: gameHasStarted }
  } = useGameContext();

  return <>{gameHasStarted ? <GameSession /> : <NamePetForm />}</>;
};

export default Pet;
