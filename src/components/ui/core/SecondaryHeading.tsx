interface SecondaryHeadingProps {
  children: React.ReactNode;
  className?: string;
}
function SecondaryHeading({ children, className = '' }: SecondaryHeadingProps) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-extrabold tracking-wide leading-10 ${className}`}
    >
      {children}
    </h2>
  );
}
export default SecondaryHeading;
