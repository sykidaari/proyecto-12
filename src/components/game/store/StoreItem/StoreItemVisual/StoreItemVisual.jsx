import useStoreItemContext from '@/hooks/useStoreItemContext.js';
import cN from '@/utils/classNameManager.js';

const StoreItemVisual = () => {
  const { name, src, alt } = useStoreItemContext();

  return (
    <>
      <img
        src={src.replace('ITEM', name)}
        className={cN(alt && 'group-hover:hidden')}
      />
      {alt && (
        <img
          src={alt.replace('ITEM', name)}
          className='hidden scale-115 group-hover:block'
        />
      )}
    </>
  );
};

export default StoreItemVisual;
