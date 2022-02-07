import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="container-fluid __app">
      <div className="row h-100">
        <div className="col-lg-3 col-md-12 p-3">
          <SideBar />
        </div>
        <div className="col-lg-9 col-md-12 p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
