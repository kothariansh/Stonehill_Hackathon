import React from "react";

const ProfileFeed = () => {
	return (
		<React.Fragment>
			<div class="noteCard my-2 mx-2 card">
				<div class="card-body">
					<h5 class="card-title">Indiance</h5>
					<p class="card-text">Computer Engineering</p>
					<button onclick="deleteNote(this.id)" class="btn btn-primary">Create DM</button>
				</div>
			</div>
			<div class="noteCard my-2 mx-2 card">
				<div class="card-body">
					<h5 class="card-title">Realtime</h5>
					<p class="card-text">Data Science</p>
					<button onclick="deleteNote(this.id)" class="btn btn-primary">Create DM</button>
				</div>
			</div>
			<div class="noteCard my-2 mx-2 card">
				<div class="card-body">
					<h5 class="card-title">AR</h5>
					<p class="card-text">Computer Science</p>
					<button onclick="deleteNote(this.id)" class="btn btn-primary">Create DM</button>
				</div>
			</div>
		</React.Fragment>
		)
}
export default ProfileFeed;