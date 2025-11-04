import useGameContext from '@/hooks/useGameContext.js';
import cN from '@/utils/classNameManager.js';
import React from 'react';

const StyledPetName = ({ bolder }) => {
  const {
    state: { petName }
  } = useGameContext();

  return (
    <span className={cN('font-semibold', bolder && 'font-bold')}>
      {petName}
    </span>
  );
};

export default StyledPetName;
