import { useReducer } from "react"
import EmployeeService from "../../services/EmployeeService";
import { useNavigate } from 'react-router-dom';


export type employeeState ={
  firstName:string
  lastName:string
  emailId:string
  id? : number
};

const initialState : employeeState= {
    firstName : "",
    lastName : "",
    emailId : ""
};

interface reducerAction {
    type : string
    payload? : string
}

const reducer = (state : employeeState ,action : reducerAction ) => {
   switch(action.type){
    case "firstName":
        return Object.assign({},state,{
            firstName : action.payload
        } );
    case "lastName":
        return Object.assign({},state,{
            lastName : action.payload
        } );
    case "emailId":
        return Object.assign({},state,{
            emailId : action.payload
        } );
    case "clearValues":
        return initialState;    
    default:
        return state;
   }
};

const AddEmployee = () => {


  const [state,dispatch] = useReducer(reducer,initialState);

  const navigate = useNavigate();


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event : any) => {
     dispatch({
        type : event.target.name,
        payload : event.target.value,
     });
  };
  
  const handleClear = () => {
    dispatch({
        type : "clearValues"
     });
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postEmployee = async(e : any) =>{
     e.preventDefault();
     console.log(e);
     await EmployeeService.saveEmployee(state)
     .then(() => {
        navigate('/employeeList')
        console.log("Employee saved successfully")
     }) // eslint-disable-next-line @typescript-eslint/no-explicit-any
     .catch((err : any )=> {
        console.log("Error saving employee",err);
     })
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow-sm border-b">
        <div className='px-8 py-8'>
            <div className="font-thin text-2xl tracking-wider">
               <h1>Add New Employee</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                 <label className="block text-gray-600 text-sm font-sans">First Name</label>
                 <input name="firstName" type="text" className="h-10 w-96 border mt-2 px-2 py-2" onChange={handleChange} value={state.firstName}/>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                 <label className="block text-gray-600 text-sm font-sans">Last Name</label>
                 <input name="lastName" type="text" className="h-10 w-96 border mt-2 px-2 py-2" onChange={handleChange} value={state.lastName}/>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                 <label className="block text-gray-600 text-sm font-sans">Email</label>
                 <input name="emailId" type="email" className="h-10 w-96 border mt-2 px-2 py-2" onChange={handleChange} value={state.emailId}/>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 space-x-4 py-4">
                <button className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700" onClick={postEmployee}>Save</button>
                <button className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700" onClick={handleClear}>Clear</button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee