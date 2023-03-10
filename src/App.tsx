import React from 'react';

// import UserData from './Components/Table/UserData'

import NavBar from './Components/NavBar/NavBar';

import { BrowserRouter as Router, Routes,
  Route, Navigate} from "react-router-dom";
import AddUser from './Components/AddUser.tsx/AddUser';
import Home from './Components/Home/Home';



function App() {
  return (
    <div className="App">

     <Router>
        <NavBar />
        <Routes>
        <Route  path="/" element={<Home />} />
          <Route  path="/adduser" element= {<AddUser />} />
         <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>   
      
    </div>
  );
}

export default App;
