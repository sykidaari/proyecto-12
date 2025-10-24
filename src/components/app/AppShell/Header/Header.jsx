import { Link } from 'react-router-dom';
import { Bars3Icon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import NavLinks from '@c/app/AppShell/NavLinks/NavLinks';
import cN from '@/utils/classNameManager';
import useAppContext from '@/hooks/useAppContext';

const Header = () => {
  const { state } = useAppContext();

  const { mobileNavOpen, settingsOpen } = state;

  return (
    <header className='bg-primary relative z-80 w-dvw shadow-sm text-primary-content'>
      <nav className='navbar sm:px-5'>
        <label
          htmlFor='mobile-nav-drawer'
          aria-label='open sidebar'
          className={cN(
            'btn btn-ghost btn-circle btn-primary sm:hidden mr-2.5',
            mobileNavOpen && 'btn-active',
            settingsOpen && 'btn-disabled'
          )}
        >
          <Bars3Icon className='size-6' />
        </label>

        <Link to={'/home'} className='navbar-start text-md font-semibold '>
          <h1> ReactGotchi</h1>
        </Link>

        <NavLinks className='hidden navbar-center sm:menu-horizontal' />
        <div className='navbar-end'>
          <label
            htmlFor='settings-drawer'
            aria-label='open sidebar'
            className={cN(
              'btn btn-ghost btn-circle btn-secondary btn-square',
              mobileNavOpen && 'btn-disabled',
              settingsOpen && 'btn-active'
            )}
          >
            <Cog6ToothIcon className='size-5' />
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Header;
