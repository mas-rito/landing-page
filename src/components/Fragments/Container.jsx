const Container = ({ classname, children }) => {
  return (
    <div className={`container mx-auto px-2 sm:px-4 ${classname}`}>
      {children}
    </div>
  );
};

export default Container;
