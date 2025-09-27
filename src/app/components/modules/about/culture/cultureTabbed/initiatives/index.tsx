import Para from '@/app/components/ui/core/Para';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { IInitiatives } from '@/types';

function Initiatives({ initiatives }: { initiatives: IInitiatives[] }) {
  const containerRef = useStaggerChildren<HTMLDivElement>({
    y: 30,
    stagger: 0.2,
    once: true,
  });
  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {initiatives.map((initiative, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-md p-6 hover:shadow-md transition duration-300"
        >
          <div className="text-3xl mb-3">{initiative.icon}</div>
          <h3 className="text-xl font-bold mb-1">{initiative.title}</h3>
          <Para>{initiative.description}</Para>
        </div>
      ))}
    </div>
  );
}
export default Initiatives;
