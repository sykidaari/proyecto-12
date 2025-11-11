import useAppContext from '@/hooks/useAppContext';
import { setMobileNavDrawer, setSettingsDrawer } from '@/reducers/app/actions';
import Header from '@c/app/AppShell/Header/Header';
import NavLinks from '@c/app/AppShell/NavLinks/NavLinks';
import Settings from '@c/app/AppShell/Settings/Settings';

const AppShell = ({ children }) => {
  const {
    state: { mobileNavIsOpen, settingsIsOpen },
    dispatch
  } = useAppContext();

  const toggleMobileNav = () => setMobileNavDrawer(dispatch, !mobileNavIsOpen);
  const toggleSettings = () => setSettingsDrawer(dispatch, !settingsIsOpen);

  return (
    // LEFT DRAWER: MOBILE MENU
    <div className=' drawer'>
      <input
        id='mobile-nav-drawer'
        type='checkbox'
        className='drawer-toggle'
        checked={mobileNavIsOpen}
        onChange={toggleMobileNav}
      />
      <div className='drawer-content'>
        {/* RIGHT DRAWER: SETTINGS */}
        <div className='drawer drawer-end'>
          <input
            id='settings-drawer'
            type='checkbox'
            className='drawer-toggle'
            checked={settingsIsOpen}
            onChange={toggleSettings}
          />
          <div className='drawer-content'>
            {/* Header contains labels to open both drawers */}
            <Header />
            {/* PAGE-CONTENT */}
            <main className='min-h-[calc(100dvh-65px)] flex justify-center items-center'>
              {children}
            </main>
          </div>

          <div className='drawer-side'>
            <label
              htmlFor='settings-drawer'
              aria-label='close sidebar'
              className='drawer-overlay'
            />
            <Settings />
          </div>
        </div>
      </div>
      <div className='drawer-side sm:hidden '>
        <label
          htmlFor='mobile-nav-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        />

        <NavLinks className='sm:hidden bg-base-300 min-h-full pt-25 w-1/3 min-w-fit' />
      </div>
    </div>
  );
};

export default AppShell;
