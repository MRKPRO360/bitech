import { IEmployee } from '@/types';
import UpdateEmployeeForm from './UpdateEmployeeForm';

function UpdateEmployee({ employee }: { employee: IEmployee }) {
  return (
    <div>
      <UpdateEmployeeForm employee={employee} />
    </div>
  );
}
export default UpdateEmployee;
