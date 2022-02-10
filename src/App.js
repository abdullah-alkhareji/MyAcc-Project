import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";
import Todo from "./pages/Todo";

function App() {
	return (
		<div className='container-fluid app'>
			<div className='app__left'>
				<SideBar />
			</div>
			<div className='app__right'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/tasks' element={<Tasks />} />
					<Route path='/todo' element={<Todo />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
