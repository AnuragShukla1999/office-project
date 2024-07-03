
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
