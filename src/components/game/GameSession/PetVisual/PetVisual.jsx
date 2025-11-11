import backgroundPositions from '@/data/backgroundPositions.js';
import useGameContext from '@/hooks/useGameContext.js';
import './PetVisual.css';
import cN from '@/utils/classNameManager.js';
import { memo } from 'react';

const PetVisual = () => {
  const {
    state: { petSkin, sprite, background, isAwake, isPlaying }
  } = useGameContext();

  return (
    <div className='w-full aspect-square relative [@media(max-height:750px)]:max-h-[45dvh]'>
      {/* BACKGROUND */}
      <img
        src={`/petRooms/${background}.webp`}
        alt='background'
        className='w-full object-contain blur-[1px] rounded-t-box'
        data-pet-visual-css
      />

      {/* PET */}
      <img
        src={`/petSprites/${petSkin}/${
          isPlaying ? 'blushing' : !isAwake ? 'sleeping' : sprite
        }.webp`}
        alt='pet'
        className={cN(
          'w-1/4 h-1/4 object-contain absolute left-1/2 -translate-x-1/2',
          isPlaying
            ? 'animate-bounce'
            : 'animate-[tiny-bounce_1.2s_ease-in-out_infinite]'
        )}
        // PET IS POSSITIONED DIFFERENTLY DEPENDING ON BG. DYNAMIC, CAN'T APPLY TAILWIND
        style={{ bottom: `${backgroundPositions[background]}%` }}
      />
    </div>
  );
};

export default memo(PetVisual);
