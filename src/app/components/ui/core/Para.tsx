interface IParaProps {
  children: React.ReactNode;
  className?: string;
}
function Para({ children, className = '' }: IParaProps) {
  return (
    <p
      className={`text-base sm:text-[17px] tracking-wide font-semibold leading-6 text-grey ${className}`}
    >
      {children}
    </p>
  );
}
export default Para;
