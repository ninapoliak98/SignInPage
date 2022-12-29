import './App.css';
import Signup from "./Components/Signup";
import {AuthProvider} from "./Context/AuthContext";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
      <div>
          <Router>
              <AuthProvider>
                  <Routes>
                      <Route
                          path="/"
                          element={
                              <PrivateRoute>
                                  <Dashboard />
                              </PrivateRoute>
                          }
                      />
                      <Route path="/signup" element={<Signup/>}/>
                      <Route path="/login" element={<Login/>}/>
                  </Routes>
              </AuthProvider>
          </Router>
      </div>
  );
}

export default App;
