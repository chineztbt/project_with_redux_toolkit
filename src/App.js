import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./component/home";
import Create from "./component/create";
import Update from "./component/update";




function App() {
  return (
    // pour gérer la navigation coté navigateur 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/add" element={<Create/>}/>
    <Route path="/edit/:id" element={<Update/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
