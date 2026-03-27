import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer, toast } from "react-toastify";

function App() {
  
    const [credit, setCredit] = useState(0);
    const addFreeCredit = () => {
      setCredit(100000);
      toast.success("You have got 100000 free credit!");
    };

  return (
    <>
      <Navbar credit={credit} />
      <Banner addFreeCredit={addFreeCredit} />
      <ToastContainer />
    </>
  );
}

export default App
