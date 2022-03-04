import { useState } from "react"
import axios from "axios";

const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = async (event) => {
		event.preventDefault();
		const authObj = { 'Project-ID': '20fcfd94-a1ba-40ea-b429-3b7b6f7444e6', 'User-Name': username, 'User-Secret': password}

		try {
			await axios.get('https://api.chat-engine.io/chats', { headers: authObj });
		} catch (error) {

		}
	}
	return (
		<div className="wrapper">
			<div className="form">
				<h1>Chat Application</h1>
				<form onSubmit={handleSubmit}>
					<input type="text" value={username} onChange={(event) => {setUsername(event.target.value)}} placeholder="Username" required/>
					<input type="password" value={password} onChange={(event) => {setPassword(event.target.value)}} placeholder="Password" required/>
					<div align="center">
						<button type="submit" className="button">
							<span>Star Chatting</span>
						</button>
					</div>
				</form>

			</div>
		</div>
	)
}