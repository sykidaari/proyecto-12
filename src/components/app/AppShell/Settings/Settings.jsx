import { Fragment } from 'react/jsx-runtime';
import useText from '@/hooks/useText';
import LanguageSetting from '@c/app/AppShell/Settings/LanguageSetting/LanguageSetting';
import ThemeSetting from '@c/app/AppShell/Settings/ThemeSetting/ThemeSetting';
import SaveSetting from '@c/app/AppShell/Settings/SaveSetting/SaveSetting.jsx';

const settings = {
  language: LanguageSetting,
  theme: ThemeSetting,
  save: SaveSetting
};

const Settings = () => {
  const { title, options } = useText('app.settings');

  return (
    <section className='min-h-full bg-base-300 pt-25 px-5 w-60 max-w-full text-center'>
      <h3 className='text-sm font-semibold'>{title}</h3>
      <div className='divider' />
      <ul>
        {Object.keys(options).map((key, i, options) => {
          const Content = settings[key];
          const isLastOne = i < options.length - 1;

          return (
            <Fragment key={key}>
              <li className='card card-sm card-border p-3 bg-accent'>
                {Content && <Content />}
              </li>

              {isLastOne && <div className='divider'></div>}
            </Fragment>
          );
        })}
      </ul>
    </section>
  );
};

export default Settings;
