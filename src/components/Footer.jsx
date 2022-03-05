import React from "react";
const Footer = () => {
	return (
		<React.Fragment>
			<div>
				<table>
					<tr>
						<br />
						<td style={{ padding: "0px 120px" }}>
							<h6> <b> Courses/Subjects </b> </h6>
						</td>
						<td style={{ padding: "0px 120px" }}>
							<h6> <b> Features </b> </h6>
						</td>
						<td style={{ padding: "0px 120px" }}>
							<h6> <b> About </b> </h6>
						</td>
					</tr>
					<tr>
						<td style={{ padding: "0px 120px" }}>
							<div class="text">
								<a style={{ textDecoration: "none" }} href="#Math">Math</a> <br />
								<a style={{ textDecoration: "none" }} href="#Physics">Physics</a> <br />
								<a style={{ textDecoration: "none" }} href="#Chem">Chem</a> <br />
								<a style={{ textDecoration: "none" }} href="#CompSci">Comp Sci</a> <br />
								<a style={{ textDecoration: "none" }} href="#Bio">Bio</a> <br />
								<a style={{ textDecoration: "none" }} href="#EcoManagement">Eco and Management</a>
							</div>
						</td>
						<td style={{ padding: "0px 120px" }}>
							<div class="text">
								<a style={{ textDecoration: "none" }} href="#ChatRoom">ChatRoom</a> <br />
								<a style={{ textDecoration: "none" }} href="#Profile">Profile Creation</a> <br />
								<a style={{ textDecoration: "none" }} href="#Chem">Courses/Subjects</a> <br />
							</div>
						</td>
						<td style={{ padding: "0px 120px" }}>
							<div class="text">
								<a style={{ textDecoration: "none" }} href="#Information">Information Awareness</a> <br />
							</div>
						</td>
					</tr>
				</table>
			</div>
		</React.Fragment>
	)
}
export default Footer;