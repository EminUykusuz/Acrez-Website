import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext"; 
import SmoothScroll from "./components/providers/SmoothScroll";
import CustomCursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Preloader from "./components/Preloader"; // Sadece bunu tutuyoruz


function App() {
  return (
    <LanguageProvider>
      <Router>
        {/* Havalı Yüklenme Ekranımız */}
        <Preloader />
        
        <SmoothScroll>
          <div className="bg-[#040f09] text-white min-h-screen selection:bg-acrez-accent selection:text-black font-sans antialiased">
            <CustomCursor />
            <Navbar />
            
            <Routes>
              {/* Sayfa geçiş animasyonunu sildiğin için Routes'un içi tertemiz kaldı */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
             
            </Routes>
            
            <Footer />
          </div>
        </SmoothScroll>
      </Router>
    </LanguageProvider>
  );
}

export default App;