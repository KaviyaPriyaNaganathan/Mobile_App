
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Clayouts from "./Clayouts";
const App:React.FC=() =>
{
  return (
   <>
     <BrowserRouter>
    <Routes>
    <Route path="/" element={<Clayouts/>}></Route>

    </Routes>
    </BrowserRouter>
   </>
   
    
  );
}

export default App;
