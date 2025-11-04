const StoreSection = ({ title, items, src, prices }) => {
  // handle objects differently from arrays
  if (!Array.isArray(items)) items = Object.entries(items);

  return (
    <section>
      <h3>{title}</h3>
      <ul className='carousel bg-base-300 rounded-box'>
        {items.map((item, i) => {
          // objects will have more data displayed, so need to get key (object[0]) and value (object[1]) separately
          const srcItem = item.length === 2 ? item[0] : item;

          return (
            <li key={i} className='card carousel-item'>
              <img
                src={src.replace('ITEM', srcItem)}
                className='w-100 object-contain'
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default StoreSection;
