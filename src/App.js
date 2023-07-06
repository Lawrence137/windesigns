import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import { createBrowserHistory } from 'history';
import './App.css';
import { Login } from './Login';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Investment } from './Investment';
import { SignUp } from './SignUp';
import { Company } from './Company';

const history = createBrowserHistory();

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    setIsAuthenticated(false);
    history.push('/');
  };
  return (
    <Router>
      <div className="min-h-screen ">
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout}  />
        <Routes history={history}>
          <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
          {isAuthenticated && (
            <>
              <Route path="/investment" element={<Investment setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/company" element={<Company />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};
