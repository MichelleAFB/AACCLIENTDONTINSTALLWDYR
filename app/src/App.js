
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

/***PAGES************************************************ */

//ENTRY
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

//ADMIN
import UI from './pages/AdminUI/UI'
import ReservationsPage from './pages/AdminUI/ReservationsPage'
import EventsPage from './pages/AdminUI/EventsPage';

//Client
import ClientFullSuite from './pages/ClientUI/ClientFullSuite'
import ClientPreHome from './pages/ClientUI/ClientPreHome'

//Employee
import EmployeeHome from './pages/EmployeeUI/EmployeeHome'
import axios from 'axios';
function App() {

  axios.get("http://localhost:3002/currentEvents").then((response) => {
    console.log(response.data)
  })
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
