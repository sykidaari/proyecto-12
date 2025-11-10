import StoreItemContext from '@/providers/StoreItem/StoreItemContext.js';

const StoreItemProvider = ({ item, children }) => {
  return (
    <StoreItemContext.Provider value={item}>
      {children}
    </StoreItemContext.Provider>
  );
};

export default StoreItemProvider;
