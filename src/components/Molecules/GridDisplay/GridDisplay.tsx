const GridDisplay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-[1250px] mx-auto">
      {children}
    </div>
  );
};

export default GridDisplay;
