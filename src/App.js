import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
const App = () => {
	return (
		<ChatEngine
			height="100vh"
			projectID="20fcfd94-a1ba-40ea-b429-3b7b6f7444e6"
			userName="Indiance"
			userSecret="123123"
			renderChatFeed={(chatAppPrompts) => <ChatFeed {... chatAppPrompts}/>}
		/>
	);
}

export default App;