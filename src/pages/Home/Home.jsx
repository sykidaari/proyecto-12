import { useText } from '@/hooks/useText';

const Home = () => {
  const t = useText('app.home');

  const { title, description, startNew, continueCurrent, createdBy } = t;

  return (
    <section className='card sm:card-xl items-center overflow-hidden m-5'>
      <img
        //! SRC IS PLACEHOLDER
        src='/public/petSprites/Tamagotchi_iD_L/close_up.gif'
        alt='pet'
        className='w-25 h-25 object-center object-contain'
      />

      <div className='card-body text-center items-center px-0'>
        <h3 className='card-title'>{title} ReactGotchi</h3>
        <h4>{description}</h4>
        <div className='card-actions mt-3 *:btn-block *:rounded-full'>
          <button className='btn bg-secondary text-secondary-content'>
            {startNew}
          </button>
          <button className='btn bg-accent text-accent-content'>
            {continueCurrent} PLACEHOLDER
          </button>

          <aside className='mt-2.5 text-xs  text-accent'>
            {createdBy}{' '}
            <a
              href='https://github.com/sykidaari'
              className='link footer-title'
            >
              Kira
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Home;
