import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import correct components
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="sticky top-0">
          <Header/>
        </div>
        <div className="flex-1">
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />} 
              />
            ))}
          </Routes>
        </div>
        <div className="shrink-0">
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;


