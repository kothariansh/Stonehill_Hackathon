import React from 'react';
import '../style/Header.css'
const Header = () => {
	return (
		<React.Fragment>
			<div class="topnav" style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190628/ourmid/pngtree-light-blue-background-image_264178.jpg')" }}>
				<h1 style={{ textAlign: 'center', fontSize: '100px' }}>FutureReady</h1>
			</div>
			<div style={{ color: "white" }}>
				<div class="text">
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/information">About FutureReady</a></li>
						<li><a href="/chats">Your Chats</a></li>
						<li><a href="/login">Profile Creation</a></li>
						<li><a href="/courses">Courses/Subjects</a></li>
						<li><a href="/profiles">Profile Search</a></li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	)
}
export default Header;