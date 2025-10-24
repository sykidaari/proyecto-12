import GameContext from '@/providers/Game/GameContext.js';
import { use } from 'react';

const useGameContext = () => use(GameContext);

//USE: HOOK NUEVO DE REACT 19 QUE REEMPLAZA A USECONTEXT (entre otras funcionalidades)

export default useGameContext;
