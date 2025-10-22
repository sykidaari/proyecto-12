import { useText } from '@/hooks/useText';

const Footer = () => {
  const t = useText('app.footer');

  return (
    <footer className=' p-2 sm:px-5 fixed bottom-0 bg-base-300 w-full'>
      {' '}
      <p className='text-xs text-center'>
        {t}{' '}
        <a
          href='https://github.com/sykidaari'
          className='footer-title underline'
        >
          Kira
        </a>
      </p>
    </footer>
  );
};

export default Footer;
