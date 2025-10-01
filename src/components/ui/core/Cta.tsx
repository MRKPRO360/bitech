import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

interface ICta {
  text: string;
  outline?: boolean;
  className?: string;
  hasLink?: boolean;
  path?: string;
  renderIcon?: boolean;
  icon?: ReactNode;
}

function Cta({
  text,
  outline = false,
  className = '',
  hasLink = false,
  path = '',
  renderIcon = true,
  icon = '',
}: ICta) {
  const linkedButton = (
    <Link
      href={path}
      className={clsx(
        `relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-semibold tracking-wider  rounded-lg group  transform hover:-translate-y-1 duration-400 cursor-pointer shadow-sm hover:shadow-md ${className}`,
        outline
          ? 'border border-primary/40 hover:text-gray-800'
          : 'bg-primary text-white '
      )}
    >
      <span
        className={clsx(
          'absolute w-0 h-0 transition-all duration-500 ease-out  rounded-full group-hover:w-56 group-hover:h-56',
          outline ? 'bg-primary' : 'bg-gray-800'
        )}
      ></span>
      <span className="absolute w-full h-full -mt-1 rounded"></span>

      <div
        className={clsx(
          'relative flex items-center gap-2',
          outline ? 'text-primary group-hover:text-white' : 'text-inherit'
        )}
      >
        {icon ? icon : renderIcon && <FaArrowRightLong />}

        <span>{text}</span>
      </div>
    </Link>
  );

  const button = (
    <button
      className={clsx(
        `relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-semibold tracking-wider  rounded-lg group  transform hover:-translate-y-1 duration-400 cursor-pointer shadow-sm hover:shadow-md ${className}`,
        outline
          ? 'border border-primary/40 hover:text-gray-800'
          : 'bg-primary text-white '
      )}
    >
      <span
        className={clsx(
          'absolute  w-0 h-0 transition-all duration-500 ease-out  rounded-full group-hover:w-full group-hover:h-56',
          outline ? 'bg-primary' : 'bg-gray-800'
        )}
      ></span>
      <span className="absolute w-full h-full -mt-1 rounded"></span>

      <div
        className={clsx(
          'relative flex items-center gap-2',
          outline ? 'text-primary group-hover:text-white' : 'text-inherit'
        )}
      >
        {icon ? icon : renderIcon && <FaArrowRightLong />}

        <span>{text}</span>
      </div>
    </button>
  );

  return hasLink ? linkedButton : button;
}
export default Cta;
