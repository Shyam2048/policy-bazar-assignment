import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListView from './ListView';
import DetailsPage from './DetailsPage';

const App = () => {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
