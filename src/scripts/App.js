import { render } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style/App.css';
import Chats from '../components/Chats';
import LoginForm from '../components/LoginForm';
import ProfileFeed from '../components/Profilefeed';
import Homepage from '../components/Homepage';
import Information from '../components/Information.jsx';
import Courses from '../components/Courses';
import Biology from '../components/Biology';
const App = () => {
	render()
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/login" element={<LoginForm />} />
				<Route path="/profiles" element={<ProfileFeed />} />
				<Route path="/chats" element={<Chats />} />
				<Route path="/information" element={<Information />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/courses/biology" element={<Biology />} />
			</Routes>
		</Router>
	);
}

export default App;
