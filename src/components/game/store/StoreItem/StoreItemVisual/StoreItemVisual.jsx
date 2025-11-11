import useStoreItemContext from '@/hooks/useStoreItemContext.js';
import cN from '@/utils/classNameManager.js';

const StoreItemVisual = () => {
  const { name, src, altSrc } = useStoreItemContext();

  return (
    <>
      <img
        src={src.replace('ITEM', name)}
        className={cN(altSrc && 'group-hover:hidden')}
      />
      {altSrc && (
        <img
          src={altSrc.replace('ITEM', name)}
          className='hidden scale-115 group-hover:block'
        />
      )}
    </>
  );
};

export default StoreItemVisual;
