import AppContext from '@/providers/App/AppContext';
import { use } from 'react';

const useAppContext = () => use(AppContext);

//USE: HOOK NUEVO DE REACT 19 QUE REEMPLAZA A USECONTEXT (entre otras funcionalidades)

export default useAppContext;
