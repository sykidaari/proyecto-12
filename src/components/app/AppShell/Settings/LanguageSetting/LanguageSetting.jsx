import allLanguages from '@/data/texts';
import { useText } from '@/hooks/useText';
import { cN } from '@/utils/classNameManager';
import { useAppContext } from '@/hooks/useAppContext';
import { setLanguage } from '@/reducers/app/actions';

const LanguageSetting = () => {
  const t = useText('app.settings.options.language');
  const { title, text } = t;

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
          const name = languageData.app.settings.options.language.ownName;

          const disabled = code === currentLanguage ? true : false;

          return (
            <option
              key={code}
              value={code}
              disabled={disabled}
              className={cN(disabled && 'text-accent')}
            >
              {name}
            </option>
          );
        })}
      </select>
    </fieldset>
  );
};

export default LanguageSetting;
