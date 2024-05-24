
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './Componants/NavBar/NavBar'
import SideBar from './Componants/SideBar/SideBar';
import Centers from './Componants/Centers/Centers';
import Content from './Componants/Content/Content';
import Carousel from './Pages/Carousel/Carousel';

const App = () => {
  const location = useLocation();

  // Check if the current location is not /carousel, then render the sidebar
  const renderSideBar = location.pathname !== '/carousel';

  return (
    <>
      <NavBar />
      {renderSideBar && <SideBar />} {/* Conditionally render the sidebar */}
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Centers />} />
          <Route path="/content" element={<Content />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
