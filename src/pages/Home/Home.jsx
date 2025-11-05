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
    <section className='card sm:card-xl items-center p-5 max-[210px]:p-1 [@media(max-height:425px)]:pt-0'>
      <img
        src={`/petSprites/${petSkin}/close_up.gif`}
        alt='pet'
        className='w-25 h-25  object-contain  [@media(max-height:370px)]:max-h-[20dvh]'
      />

      <div className='card-body text-center items-center px-0 [@media(max-height:425px)]:py-0.5 [@media(max-height:425px)]:gap-0.5'>
        <h3 className='card-title'>{title} ReactGotchi</h3>
        <h4 className='px-2.5'>{description}</h4>

        <StartButtons />

        <aside className='mt-2.5 text-xs text-accent'>
          {createdBy}{' '}
          <a
            href='https://github.com/sykidaari'
            className='link footer-title opacity-100'
          >
            Kira
          </a>
        </aside>
      </div>
    </section>
  );
};

export default Home;
