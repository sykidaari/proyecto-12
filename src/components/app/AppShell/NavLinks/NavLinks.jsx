import { NavLink } from 'react-router-dom';
import { useText } from '@/hooks/useText';
import { cN } from '@/utils/classNameManager';
import { useAppContext } from '@/hooks/useAppContext';

const NavLinks = ({ className }) => {
  const t = useText('app.nav');

  const { dispatch } = useAppContext();

  const handleClick = () => {
    dispatch({ type: 'SET_MOBILE_NAV_OPEN', payload: false });
  };

  return (
    <ul className={cN('menu gap-2.5', className)}>
      {Object.entries(t).map(([key, value]) => (
        <li key={key}>
          <NavLink
            to={key}
            className={({ isActive }) => cN(isActive && 'menu-active')}
            onClick={handleClick}
          >
            <h2>{value}</h2>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
