const Centered = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center min-h-[60vh]">
    {children}
  </div>
);
export default Centered;
