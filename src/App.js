import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Chats from './components/Chats';
import LoginForm from './components/LoginForm';
import ProfileFeed from './components/Profilefeed';
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LoginForm />} />
				<Route path="/profiles" element={<ProfileFeed />} />
				<Route path="/chats" element={<Chats />} />
			</Routes>
		</Router>
	);
}

export default App;