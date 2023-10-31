import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Work from './pages/work/Work'
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/footer/Footer';


const Main = () => {
  return(
    <div></div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Main/>
    {/* <Navbar/> */}
    {/* <Footer/> */}
      <Routes>
    
        <Route path='/' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
