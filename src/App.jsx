import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/sign-in' element={<SignIn/>}/>
       <Route
        path="*"
        element={<Navigate to="/signup" replace />}
    />
    </Routes>
    </BrowserRouter>
  )
};

export default App;
