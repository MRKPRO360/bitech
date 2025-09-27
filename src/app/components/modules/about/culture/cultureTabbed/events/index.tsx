import Para from '@/app/components/ui/core/Para';
import { useStaggerChildren } from '@/hooks/CardStagger';
import { IEvent } from '@/types';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Events({ events }: { events: IEvent[] }) {
  const containerRef = useStaggerChildren<HTMLDivElement>({
    y: 10,
    stagger: 0.2,
  });

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white border border-gray-200 rounded-md p-6 hover:shadow-md transition duration-300"
        >
          <div className="flex items-center mb-4 gap-2">
            <div className="text-4xl">{event.image}</div>
            <div>
              <h3 className="text-xl font-bold mb-1">{event.title}</h3>
              <div className="flex items-center gap-4">
                <div className="flex gap-1 font-semibold items-center text-gray-600">
                  <FaCalendarAlt className="" />
                  {event.date}
                </div>
                <div className="flex gap-1 font-semibold items-center text-gray-600">
                  <FaMapMarkerAlt className="" />
                  {event.location}
                </div>
              </div>
            </div>
          </div>
          <Para>{event.description}</Para>
        </div>
      ))}
    </div>
  );
}
export default Events;
