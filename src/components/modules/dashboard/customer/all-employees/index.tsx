import { IEmployee } from '@/types';

function AllEmployees({ data }: { data: IEmployee[] }) {
  console.log(data);

  return <div>AllEmployees</div>;
}
export default AllEmployees;
