import AppContext from '@/providers/App/AppContext';
import { useContext } from 'react';

export const useAppContext = () => useContext(AppContext);
