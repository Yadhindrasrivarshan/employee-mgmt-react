import { useNavigate } from "react-router-dom";
import useFetchData from "../../hooks/fetchData";
import { EMPLOYEE_SERVICE_BASE_URL } from "../../services/EmployeeService";
import { employeeState } from "../AddEmployee";

const EmployeeList = () => {
  const navigate = useNavigate();
  const  { loading , data  , error } = useFetchData(EMPLOYEE_SERVICE_BASE_URL);
  console.log(loading,data,error);
  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button onClick={() => navigate('/addEmployee')} className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b mt-2">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email Id
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {!loading && data.map((employee : employeeState) => (<tr key={employee.id}>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{employee.firstName}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{employee.lastName}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{employee.emailId}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap font-medium text-sm">
                <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">Edit</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800">Delete</a>
              </td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
