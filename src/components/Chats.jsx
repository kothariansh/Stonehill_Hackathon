import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';
const Chats = () => {
	return (
		<ChatEngine
			height="100vh"
			projectID={process.env.REACT_APP_ENGINE_KEY}
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppPrompts) => <ChatFeed {... chatAppPrompts}/>}
		/>
	)
}
export default Chats;