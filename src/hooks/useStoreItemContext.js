import StoreItemContext from '@/providers/StoreItem/StoreItemContext.js';
import { use } from 'react';

const useStoreItemContext = () => use(StoreItemContext);

//USE: HOOK NUEVO DE REACT 19 QUE REEMPLAZA A USECONTEXT (entre otras funcionalidades)

export default useStoreItemContext;
