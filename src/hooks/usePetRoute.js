import useText from '@/hooks/useText.js';

const usePetRoute = () => Object.keys(useText('app.nav'))[2];

export default usePetRoute;
