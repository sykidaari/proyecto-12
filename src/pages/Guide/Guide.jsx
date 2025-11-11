import useText from '@/hooks/useText.js';

const Guide = () => {
  const { title, sections } = useText('game.guide');

  return (
    <section className='mt-30 mb-10 card card-body self-start max-w-2xl bg-base-100 card-border shadow'>
      <h2 className='card-title mb-2.5 ml-2.5'>{title}</h2>

      {sections.map((section, i) => {
        const { title, intro, content, list, outro } = section;
        return (
          <article
            key={i}
            className='collapse collapse-arrow bg-base-200 border border-base-300'
          >
            <input type='checkbox' />

            <h3 className='collapse-title font-semibold'>{title}</h3>

            <div className='collapse-content'>
              {' '}
              {intro && <p className='font-semibold text-accent'>{intro}</p>}
              {content && content.map((line, i) => <p key={i}>{line}</p>)}
              {list && (
                <ul className='list gap-1.5 list-disc pl-2.5'>
                  {list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {outro && (
                <p className='font-semibold text-accent pt-2'>{outro}</p>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Guide;
