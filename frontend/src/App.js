import './App.css';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Component/Home';
import PrivateComponent from './Component/PrivateData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateComponent />} >
            <Route path='/home' element={<Home />} />

          </Route>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
