import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LogIn from './components/LogIn';
import User from './components/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/:id' element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
