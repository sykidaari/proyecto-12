import usePetRoute from '@/hooks/usePetRoute.js';
import { useNavigate } from 'react-router-dom';

const usePetNavigate = () => {
  const navigate = useNavigate();
  const petRoute = usePetRoute();

  const navigateToPet = () => navigate(`/${petRoute}`);

  return navigateToPet;
};

export default usePetNavigate;
