import React from "react";
import Header from "./Header";
import '../style/Courses.css';
const Courses = () => {
	return (
		<React.Fragment>
			<Header />
			<div class="row">
				<div class="column">
					<a href="/courses/math"><img src={require("../images/math.jpg")} alt="Math" style={{ width: '400px' }} /></a>
					<div class="textbox">
						<b>Math</b>
					</div>
				</div>

				<div class="column">
					<a href="/courses/phyiscs"><img src={require("../images/physics.jpg")} alt="Physics" style={{ width: "400px", height: "265px" }} /></a>
					<div class="textbox">
						<b>Physics</b>
					</div>
				</div>

				<div class="column">
					<a href="/courses/chemistry"><img src={require("../images/chemistry.jpg")} alt="Chemistry" style={{ width: "400px" }} /></a>
					<div class="textbox">
						<b>Chemistry</b>
					</div>
				</div>
				<div class="column">
					<img src="" alt="" style={{ width: '0px' }} />
				</div>
			</div>

			<div class="row">
				<div class="column">
					<a href="/courses/cs"><img src={require("../images/computer.jpg")} alt="Computer" style={{ width: "400px", height: "332px" }} /></a>
					<div class="textbox">
						<b>Computer Science</b>
					</div>
				</div>
				<div class="row">
					<div class="column">
						<a href="/courses/biology"><img src={require("../images/biology3.png")} alt="Biology" style={{ width: "400px", height: "332px" }} /></a>
						<div class="textbox">
							<b>Biology</b>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="column">
						<a href="/courses/economics"><img src={require("../images/economics.jpg")} alt="Economics" style={{ width: "400px", height: "332px" }} /></a>
						<div class="textbox">
							<b>Economics and Management</b>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
export default Courses;