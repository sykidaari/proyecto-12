import useAppContext from '@/hooks/useAppContext';
import { setMobileNavDrawer, setSettingsDrawer } from '@/reducers/app/actions';
import Header from '@c/app/AppShell/Header/Header';
import NavLinks from '@c/app/AppShell/NavLinks/NavLinks';
import Settings from '@c/app/AppShell/Settings/Settings';

const AppShell = ({ children }) => {
  const {
    state: { mobileNavOpen, settingsOpen },
    dispatch
  } = useAppContext();

  const toggleMobileNav = () => setMobileNavDrawer(dispatch, !mobileNavOpen);
  const toggleSettings = () => setSettingsDrawer(dispatch, !settingsOpen);

  return (
    // LEFT DRAWER: MOBILE MENU
    <div className='h-dvh overflow-hidden drawer'>
      <input
        id='mobile-nav-drawer'
        type='checkbox'
        className='drawer-toggle'
        checked={mobileNavOpen}
        onChange={toggleMobileNav}
      />
      <div className='drawer-content'>
        {/* RIGHT DRAWER: SETTINGS */}
        <div className='h-dvh overflow-hidden drawer drawer-end'>
          <input
            id='settings-drawer'
            type='checkbox'
            className='drawer-toggle'
            checked={settingsOpen}
            onChange={toggleSettings}
          />
          <div className='drawer-content h-dvh flex flex-col'>
            {/* Header contains labels to open both drawers */}
            <Header />
            {/* PAGE-CONTENT */}
            <main className='h-full flex justify-center items-center'>
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
        <NavLinks className='sm:hidden bg-base-300 min-h-full pt-25' />
      </div>
    </div>
  );
};

export default AppShell;
