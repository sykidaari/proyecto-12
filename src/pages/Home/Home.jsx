import useGameContext from '@/hooks/useGameContext.js';
import useText from '@/hooks/useText';
import StartButtons from '@c/game/StartButtons/StartButtons.jsx';

const Home = () => {
  const t = useText('app.home');
  const {
    state: { petSkin }
  } = useGameContext();

  const { title, description, createdBy } = t;

  return (
    <section className='card sm:card-xl items-center p-5 overflow-hidden'>
      <img
        src={`/petSprites/${petSkin}/close_up.gif`}
        alt='pet'
        className='w-25 h-25 object-center object-contain'
      />

      <div className='card-body text-center items-center px-0'>
        <h3 className='card-title'>{title} ReactGotchi</h3>
        <h4 className='px-2.5'>{description}</h4>

        <StartButtons />

        <aside className='mt-2.5 text-xs  text-accent'>
          {createdBy}{' '}
          <a href='https://github.com/sykidaari' className='link footer-title'>
            Kira
          </a>
        </aside>
      </div>
    </section>
  );
};

export default Home;
