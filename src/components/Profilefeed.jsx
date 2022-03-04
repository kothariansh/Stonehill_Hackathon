import React from "react";
import '../Profile.css'

const ProfileFeed = () => {
	return (
		<div id="parent-div">
			<a href="/name/x">
			<div className="child-div">
					<h1 class="profile-username">Indiance</h1>
					<h3 class="profile-university">Stanford</h3>
					<p class="profile-degree">Computer Engineering</p>
			</div>
			</a>
			<a href="/name/x">
			<div className="child-div">
					<h1 class="profile-username">Realtime</h1>
					<h3 class="profile-university">UCB</h3>
					<p class="profile-degree">Data Science</p>
			</div>
			</a>
			<a href="/name/x">
			<div class="child-div">
					<h1 class="profile-username">AR</h1>
					<h3 class="profile-university">Harvard</h3>
					<p class="profile-degree">Computer Science</p>
			</div>
			</a>
		</div>
		)
}
export default ProfileFeed;