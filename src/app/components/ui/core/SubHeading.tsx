interface SubHeading {
  children: React.ReactNode;
  className?: string;
}
function SubHeading({ children, className = '' }: SubHeading) {
  return (
    <h2
      className={`text-xl lg:text-[24px] font-bold tracking-tight leading-8 ${className}`}
    >
      {children}
    </h2>
  );
}
export default SubHeading;
