import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import './App.css'
import Header from './components/Header'

import Footer from './components/Footer'

function App() {
  return ( 
    <>
    <Header/>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
