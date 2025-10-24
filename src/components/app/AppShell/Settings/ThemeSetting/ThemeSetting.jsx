import useAppContext from '@/hooks/useAppContext';
import { setAppTheme } from '@/reducers/app/actions';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeSetting = () => {
  const {
    state: { theme },
    dispatch
  } = useAppContext();

  const handleChange = (e) => setAppTheme(dispatch, e.target.checked);

  return (
    <div className='m-auto'>
      <label className='flex cursor-pointer gap-2'>
        <SunIcon className='size-6' />
        <input
          type='checkbox'
          className='toggle theme-controller'
          checked={theme === 'dark'}
          onChange={handleChange}
        />
        <MoonIcon className='size-6' />
      </label>
    </div>
  );
};

export default ThemeSetting;
