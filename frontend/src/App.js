import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from "./router/routes";
import ProtectedRoute from './router/ProtectedRoute.js';
import './styles/App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map(({ path, component, isProtected }) => (
            <Route
              key={path}
              path={path}
              element={
                isProtected ? (
                  <ProtectedRoute component={component} />
                ) : (
                  React.createElement(component)
                )
              }
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
