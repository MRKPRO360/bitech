// 'use client';

// import { useFadeUp } from '@/hooks/FadeUp';
import { CheckCircle } from 'lucide-react';

function List({ items }: { items: string[] }) {
  //   const listRef = useFadeUp({ y: 10, stagger: 0.2, duration: 0.2 });

  return (
    <div
      // ref={listRef}
      className="space-y-2"
    >
      {items.map((item) => (
        <li key={item} className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          <span className="leading-6 text-grey text-[17px] font-semibold">
            {item}
          </span>
        </li>
      ))}
    </div>
  );
}
export default List;
