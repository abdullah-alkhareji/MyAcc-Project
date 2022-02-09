import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <div className="container-fluid app">
      <div className="row">
        <div className="col-lg-3 col-md-12 p-3">
          <SideBar />
        </div>
        <div className="col-lg-9 col-md-12 p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
