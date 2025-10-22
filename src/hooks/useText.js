import TEXTS from '@/data/texts';
import { useAppContext } from '@/hooks/useAppContext';

// * 1st version
// export const useText = () => {
//   const { state } = useAppContext();

//   return TEXTS[state.language];
// };

export const useText = (path) => {
  const {
    state: { language: currentLanguage }
  } = useAppContext();

  const langTexts = TEXTS[currentLanguage];

  if (!path) return langTexts;

  const parts = path.split('.');
  let value = langTexts;

  for (const part of parts) {
    value = value?.[part];
    if (value === undefined) break;
  }

  return value ?? path;
};
