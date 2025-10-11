import Cta from '@/components/ui/core/Cta';
import formatPrice from '@/components/utils/formatePrice';
import { removePrebuiltProjects } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { IPrebuiltProject } from '@/types/prebuiltProjects';

import { DollarSign, Star, Trash } from 'lucide-react';
import Image from 'next/image';

export default function CartProjectCard({
  project,
}: {
  project: IPrebuiltProject;
}) {
  const dispatch = useAppDispatch();

  const handleRemoveproject = () => {
    dispatch(removePrebuiltProjects(project));
  };

  return (
    <div className="rounded-lg flex gap-5">
      <div className="h-full w-32 rounded-md overflow-hidden">
        <Image
          src={project?.images.thumbnail as string}
          height={200}
          width={200}
          alt="project"
          className="aspect-square object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <h1 className="text-xl font-semibold">{project.title}</h1>
        <div className="flex gap-5 my-2">
          <p>
            <span className="text-gray-500">Category:</span>{' '}
            <span className="font-semibold">{project.category}</span>
          </p>
        </div>
        <div className="my-1 border border-gray-100" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h2>Price:</h2>
            <div className="flex items-center">
              <DollarSign className="text-primary w-4 h-4" />
              {formatPrice(Number(project.price))}
            </div>
          </div>

          <div className="flex items-center gap-1">
            <h2>Ratings:</h2>

            <div className="flex items-center">
              <Star className="text-primary w-4 h-4" />
              {project.results.rating}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Cta
              text=""
              onClick={handleRemoveproject}
              outline={true}
              renderIcon={false}
              icon={<Trash />}
              className="size-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
