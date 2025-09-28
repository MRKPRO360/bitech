interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className = '' }: IContainerProps) {
  return (
    <div className={`px-3 sm:px-10 container mx-auto ${className}`}>
      {children}
    </div>
  );
}
export default Container;
