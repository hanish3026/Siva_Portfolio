import AboutUs from "./pages/AboutUs";
import Archivements from "./pages/Archivements";
import Contact from "./pages/Conatct";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/contact" element={<Archivements/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
