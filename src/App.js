import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes, useLocation } from "react-router-dom";
import SignIn from './Components/Auth/SignIn/SignIn';
import SignUp from './Components/Auth/SignUp/SignUp';
import Home from './Components/Home/Home';


function App() {
  const currentPath = useLocation();
  alert(currentPath.pathname);
  return (
    <div className="App">
     {currentPath.pathname === "/signin" ||
      currentPath.pathname === "/signup" ? null : (
        <Header />
      )}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      
      <Routes>
        <Route exact path="/signin" element={<SignIn />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/signup" element={<SignUp />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
