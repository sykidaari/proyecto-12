import useGameContext from '@/hooks/useGameContext.js';
import useText from '@/hooks/useText.js';
import { useRef } from 'react';

const NamePetForm = () => {
  const t = useText('game.namePet');

  const { dispatch } = useGameContext();

  const { title, submit } = t;

  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = ref.current.value;
    dispatch({ type: 'SET_PET_NAME', payload: name });
  };

  return (
    <section className='card bg-base-300 mx-2.5 sm:card-xl'>
      <form onSubmit={handleSubmit} className='card-body'>
        <label htmlFor='pet-name' className='card-title self-center'>
          {title}
        </label>
        <input
          id='pet-name'
          ref={ref}
          type='text'
          className='input input-sm input-accent text-center uppercase'
          maxLength={16}
          required
        />

        <button type='submit' className='btn btn-accent'>
          {submit}
        </button>
      </form>
    </section>
  );
};

export default NamePetForm;
