import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import { createBrowserHistory } from 'history';
import './App.css';
import { Login } from './Login';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Investment } from './Investment';
import { SignUp } from './SignUp';

const history = createBrowserHistory();

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    setIsAuthenticated(false);
    history.push('/');
  };
  return (
    <Router> {/* Wrap your Routes component with Router */}
      <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-700 to-gray-300">
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout}  />
        <Routes history={history}>
          <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
          {isAuthenticated && (
            <>
              <Route path="/investment" element={<Investment />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};
