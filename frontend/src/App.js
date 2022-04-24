// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personal from "./components/Forms/PersonalDetail/PersonalDetail";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Forms/Profile/Profile";

const App = () => {
  return (
    <div className="h-screen px-4 py-12 bg-gradient-to-t from-purple-900">
      <Router>
        {/* <NavBar/> */}
        <Header />
        {/* <Routes>
        <Route path="/" element={<Personal />}></Route>
        <Route path="/profile" element={ <Profile/> }></Route>
        <Route path="/education" element={ }></Route>
        <Route path="/" element={ }></Route> 
        <Route path="/how-to-use" element=""></Route>
        <Route path="/register" element={ <Register/> }></Route>
      </Routes> */}
        {/* <Footer/> */}
      </Router>
    </div>
  );
};

// const App = () => {
//   return (
//     <div className="h-screen pl-4">
//       sa
//     </div>
//   )
// }

export default App;
