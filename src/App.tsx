import { Fragment } from 'react'
import Header from './components/Navbar'
import AddEmployee from './components/AddEmployee'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeList from './components/EmployeeList'

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Header/>
        <Routes>
           <Route index element={<EmployeeList/>}/>
           <Route path='/' element={<EmployeeList/>}/>
           <Route path='/employeeList' element={<EmployeeList/>}/>
           <Route path='/addEmployee'  element={<AddEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
