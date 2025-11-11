import { Link } from 'react-router-dom';
import { Bars3Icon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import NavLinks from '@c/app/AppShell/NavLinks/NavLinks';
import cN from '@/utils/classNameManager';
import useAppContext from '@/hooks/useAppContext';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const {
    state: { mobileNavIsOpen, settingsIsOpen }
  } = useAppContext();
  const { pathname } = useLocation();

  const hasFixedPosition = ['/store', '/guide'].includes(pathname);

  return (
    <header
      className={cN(
        'bg-primary relative z-80 w-dvw shadow-sm text-primary-content',
        hasFixedPosition && 'fixed'
      )}
    >
      <nav className='navbar sm:px-5'>
        <label
          htmlFor='mobile-nav-drawer'
          aria-label='open sidebar'
          className={cN(
            'btn btn-ghost btn-circle btn-primary sm:hidden mr-2.5',
            mobileNavIsOpen && 'btn-active',
            settingsIsOpen && 'btn-disabled'
          )}
        >
          <Bars3Icon className='size-6' />
        </label>

        <Link
          to={'/home'}
          className='navbar-start text-md font-semibold max-[210px]:hidden'
        >
          <h1> ReactGotchi</h1>
        </Link>

        <NavLinks className='hidden navbar-center sm:menu-horizontal sm:inline-flex' />
        <div className='navbar-end max-[210px]:absolute max-[210px]:right-1'>
          <label
            htmlFor='settings-drawer'
            aria-label='open sidebar'
            className={cN(
              'btn btn-ghost btn-circle btn-secondary btn-square',
              mobileNavIsOpen && 'btn-disabled',
              settingsIsOpen && 'btn-active'
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
