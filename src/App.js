import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App = () => {
	if (!localStorage.getItem('username')) return <LoginForm />;
	return (
		<ChatEngine
			height="100vh"
			projectID={process.env.REACT_APP_ENGINE_KEY}
			userName="Indiance"
			userSecret="123123"
			renderChatFeed={(chatAppPrompts) => <ChatFeed {... chatAppPrompts}/>}
		/>
	);
}

export default App;