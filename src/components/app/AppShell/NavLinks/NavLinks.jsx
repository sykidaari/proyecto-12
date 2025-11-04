import { NavLink } from 'react-router-dom';
import useText from '@/hooks/useText';
import cN from '@/utils/classNameManager';
import useAppContext from '@/hooks/useAppContext';
import useGameContext from '@/hooks/useGameContext.js';
import { setMobileNavDrawer } from '@/reducers/app/actions.js';
import StyledPetName from '@c/game/StyledPetName/StyledPetName.jsx';
import usePetRoute from '@/hooks/usePetRoute.js';

const NavLinks = ({ className }) => {
  const t = useText('app.nav');
  const {
    state: { petName }
  } = useGameContext();
  const {
    state: { settingsOpen },
    dispatch
  } = useAppContext();
  const petRoute = usePetRoute();

  const handleClick = () => {
    setMobileNavDrawer(dispatch, false);
  };

  return (
    <ul className={cN('menu gap-2.5', className)}>
      {Object.entries(t).map(([key, value]) => {
        const isPet = petName && key === petRoute;

        return (
          <li key={key} className={cN(settingsOpen && 'menu-disabled')}>
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
