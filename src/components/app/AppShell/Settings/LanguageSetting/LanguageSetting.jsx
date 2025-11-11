import allLanguages from '@/data/texts';
import useText from '@/hooks/useText';
import cN from '@/utils/classNameManager';
import useAppContext from '@/hooks/useAppContext';
import { setLanguage } from '@/reducers/app/actions';

const LanguageSetting = () => {
  const { title, text } = useText('app.settings.options.language');

  const {
    state: { language: currentLanguage },
    dispatch
  } = useAppContext();

  const handleChange = (e) => setLanguage(dispatch, e.target.value);

  return (
    <fieldset className='fieldset'>
      <legend className='fieldset-legend card-title'>{title}</legend>
      <select
        defaultValue={currentLanguage}
        onChange={handleChange}
        className='select select-accent'
      >
        <option disabled>{text}</option>

        {Object.entries(allLanguages).map(([code, languageData]) => {
          const languageName =
            languageData.app.settings.options.language.ownName;

          const isDisabled = code === currentLanguage ? true : false;

          return (
            <option
              key={code}
              value={code}
              disabled={isDisabled}
              className={cN(isDisabled && 'text-accent')}
            >
              {languageName}
            </option>
          );
        })}
      </select>
    </fieldset>
  );
};

export default LanguageSetting;
