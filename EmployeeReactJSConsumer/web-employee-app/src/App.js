import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
     <h3 className="d-fex justify-content-center m-3">
       React JS FrontEnd
     </h3>

      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              HOME
            </NavLink>
          </li>

          <li className="nav-item m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/employee">
              Employee
            </NavLink>
          </li>

          <li className="nav-item m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/department">
              Department
            </NavLink>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/employee" element={<Employee/>} />
        <Route path="/department" element={<Department/>} />
      </Routes>
    
    
    </div>
    </BrowserRouter>
  );
}

export default App;
