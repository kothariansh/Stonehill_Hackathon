import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import { useState } from 'react';
const Chats = () => {
	const [username, setUsername] = useState('')
	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ usernames: [username] },
			() => setUsername('')
			)
		}
	
		function renderChatForm(creds) {
			return (
				<div>
					<input 
						placeholder='Username' 
						value={username} 
						onChange={(e) => setUsername(e.target.value)} 
					/>
					<button onClick={() => createDirectChat(creds)}>
						Create
					</button>
				</div>
			)
		}
	return (
		<ChatEngine
			height="100vh"
			projectID={process.env.REACT_APP_ENGINE_KEY}
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}
export default Chats;