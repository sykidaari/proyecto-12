const CheapEffect = () => {
  return (
    <div>
      <div className='animate-pulse size-full bg-linear-to-br from-info/50 to-success/50 rounded-box absolute inset-0 group-hover:animate-none' />
      <div className='size-2.5 bg-success rounded-full absolute -top-px -right-px animate-ping group-hover:hidden' />
    </div>
  );
};

export default CheapEffect;
