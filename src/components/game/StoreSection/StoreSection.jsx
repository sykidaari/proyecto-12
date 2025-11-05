const StoreSection = ({ title, items, src, prices }) => {
  // handle objects differently from arrays
  if (!Array.isArray(items)) items = Object.entries(items);

  return (
    <section className='card w-fit max-w-full'>
      <h3 className='card-title'>{title}</h3>
      <ul className='carousel bg-base-300 rounded-box join carousel-center'>
        {items.map((item, i) => {
          // objects will have more data displayed, so need to get key (object[0]) and value (object[1]) separately
          const srcItem = item.length === 2 ? item[0] : item;

          return (
            <li
              key={i}
              className='carousel-item m-2.5 p-2.5 bg-base-200 rounded-box'
            >
              <img
                src={src.replace('ITEM', srcItem)}
                className='w-30 h-30 object-contain rounded-box'
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default StoreSection;
