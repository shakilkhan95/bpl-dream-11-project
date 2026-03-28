import { Suspense, useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer, toast } from "react-toastify";
import Players from './components/Players/Players';


const fetchPlayers = async () => {
  const res = await fetch("data.json");
  return res.json();
};

function App() {
  
    const [credit, setCredit] = useState(0);
    const [isDisabledBtn, setIsDisableBtn] = useState(false);

    const addFreeCredit = () => {
      setCredit(100000);
      setIsDisableBtn(true);
      toast.success("You have got 100000 free credit!");
    };

    const playerDataPromise = fetchPlayers();


  return (
    <>
      <Navbar credit={credit} />
      <Banner addFreeCredit={addFreeCredit} disabled={isDisabledBtn} />
      <Suspense
        fallback={
          <div className='flex justify-center items-center py-10'>
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <Players playerDataPromise={playerDataPromise} />
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App
