const StoreSectionBase = ({ title, children }) => {
  return (
    <section className='card items-start gap-3'>
      <h3 className='card-title text-xl mb-2.5 ml-2.5 max-[200px]:ml-0'>
        {title}
      </h3>
      {children}
    </section>
  );
};

export default StoreSectionBase;
