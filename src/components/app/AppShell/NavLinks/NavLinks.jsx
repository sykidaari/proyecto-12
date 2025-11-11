import { NavLink } from 'react-router-dom';
import useText from '@/hooks/useText';
import cN from '@/utils/classNameManager';
import useAppContext from '@/hooks/useAppContext';
import useGameContext from '@/hooks/useGameContext.js';
import { setMobileNavDrawer } from '@/reducers/app/actions.js';
import StyledPetName from '@c/game/StyledPetName/StyledPetName.jsx';
import usePetRoute from '@/hooks/usePetRoute.js';

const NavLinks = ({ className }) => {
  const linkNames = useText('app.nav');
  const {
    state: { petName: gameHasStarted }
  } = useGameContext();
  const {
    state: { settingsIsOpen },
    dispatch
  } = useAppContext();
  const petRoute = usePetRoute();

  const handleClick = () => {
    setMobileNavDrawer(dispatch, false);
  };

  return (
    <ul className={cN('menu gap-2.5', className)}>
      {/* title for very small screen */}
      <li className='hidden text-md font-semibold max-[210px]:block menu-disabled text-primary'>
        <h1>ReactGotchi</h1>
      </li>

      {Object.entries(linkNames).map(([key, value]) => {
        const isPet = gameHasStarted && key === petRoute;
        const isStore = key === 'store';

        return (
          <li
            key={key}
            className={cN(
              settingsIsOpen && 'menu-disabled',
              !gameHasStarted && isStore && 'menu-disabled'
            )}
          >
            <NavLink
              to={key}
              className={({ isActive }) => cN(isActive && 'menu-active')}
              onClick={handleClick}
            >
              <h2>{isPet ? <StyledPetName /> : value}</h2>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
