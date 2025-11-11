import useAppContext from '@/hooks/useAppContext.js';
import useText from '@/hooks/useText.js';
import { setAppSave } from '@/reducers/app/actions.js';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { XCircleIcon } from '@heroicons/react/24/solid';

const SaveSetting = () => {
  const {
    state: { save },
    dispatch
  } = useAppContext();

  const { title, text } = useText('app.settings.options.save');

  const handleChange = (e) => setAppSave(dispatch, e.target.checked);

  return (
    <div className='m-auto'>
      <fieldset className='fieldset '>
        <legend className='fieldset-legend'>{title}</legend>
        <label className='flex flex-col items-center cursor-pointer gap-2.5'>
          <span className='label whitespace-normal text-balance'>{text}</span>
          <div className='flex gap-2'>
            <XCircleIcon className='size-6' />
            <input
              type='checkbox'
              className='toggle'
              checked={save === 'yes'}
              onChange={handleChange}
            />
            <CheckCircleIcon className='size-6' />
          </div>
        </label>
      </fieldset>
    </div>
  );
};

export default SaveSetting;
