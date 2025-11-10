import cN from '@/utils/classNameManager.js';
import { XCircleIcon } from '@heroicons/react/24/solid';

// * THIS COMPONENT IS MEANT TO BE USED WITH THE HOOK: useAlert

// useAlert shows and removes alert, if want permanent alert, don't use

const Alert = ({ className, children, x }) => {
  return (
    <div
      className={cN(
        'alert w-fit text-nowrap text-center max-[300px]:text-balance max-[300px]:alert-vertical  z-50 animate-slide-in-bottom animate-[slide-in-bottom_0.6s_ease-out_both]',
        className
      )}
    >
      {x && <XCircleIcon className='size-5' />}
      <p>{children}</p>
    </div>
  );
};

export default Alert;
