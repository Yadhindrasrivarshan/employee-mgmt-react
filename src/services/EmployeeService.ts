import axios from "axios";
import { employeeState } from "../components/AddEmployee";

export const EMPLOYEE_SERVICE_BASE_URL = "http://localhost:8080/api/v1/employees"

class EmployeeService {

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    saveEmployee(employee : employeeState) : Promise<any> {
        return axios.post(EMPLOYEE_SERVICE_BASE_URL,employee);
    }
}

export default new EmployeeService();