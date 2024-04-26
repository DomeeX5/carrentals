import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import NewCarForm from './Form';
import Footer from './Footer';
import MyNavbar from './Navbar';
import { useRef } from 'react';

function App() {
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <Router>
      <MyNavbar onScroll={scrollToBottom} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <NewCarForm  />
      <div  ref={footerRef}></div>
      <Footer />
    </Router>
  );
}

export default App
