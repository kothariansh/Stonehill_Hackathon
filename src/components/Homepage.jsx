import React from "react"
import Footer from "./Footer";
import Header from "./Header"
const Homepage = () => {
	return (
		<React.Fragment>
			<Header />
			<div style={{ fontFamily: "Tahoma, sans-serif", backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190628/ourmid/pngtree-light-blue-background-image_264178.jpg')" }}>
				<div style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp6725865.jpg')" }}>
					<table>
						<tr>
							<td style={{ padding: "80px" }}>
								<h3> Be prepared for your future. </h3>
								<h6 style={{ fontSize: "20px" }}> Take care of any worries or concerns you have about college by exploring courses and conversing with fellow students. </h6>
							</td>
							<td> <img alt="" src="https://media.npr.org/assets/img/2021/08/27/gettyimages-97237141-ee258920f4ee55c2983b0ea3eb6294602934007d-s1100-c50.jpg" height={210} width={450} style={{ border: "6px groove #545565" }} />
							</td>
						</tr>
						<tr>
							<td style={{ padding: "40px" }}> <img alt="" src="https://omegle.ca/wp-content/uploads/2019/12/omegle-students-chat.jpg" height={210} width={450} style={{ border: "6px groove #545565" }} />
							</td>
							<td style={{ padding: "80px" }}>
								<h3> Where aspirants connect with students. </h3>
								<h6 style={{ fontSize: "20px" }}> Unsure about what college is right for you? Wondering what to do over the summer? Chat with college students, undergrads, and postgrads who know what you're going through. </h6>
							</td>
						</tr>
						<tr>
							<td style={{ padding: "80px" }}>
								<h3> Make sure you're on the right course. </h3>
								<h6 style={{ fontSize: "20px" }}> Search and explore courses that interest you or are applicable to what you want to study or pursue. Core subjects are available. </h6>
							</td>
							<td> <img alt="" src="https://images.indianexpress.com/2020/04/online759.jpg" height={210} width={450} style={{ border: "6px groove #545565" }} />
							</td>
						</tr>
						<tr>
							<td style={{ padding: "40px" }}> <img alt="" src="https://www.irishjobs.ie/careeradvice/wp-content/uploads/how-to-write-a-cv.jpg" height={210} width={450} style={{ border: "6px groove #545565" }} />
							</td>
							<td style={{ padding: "80px" }}>
								<h3> Make FutureReady your own. </h3>
								<h6 style={{ fontSize: "20px" }}> Create your own profile and select your interests to personalize your experience at FutureReady. </h6>
							</td>
						</tr>
					</table>
				</div>
			</div>
			<Footer />
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
		</React.Fragment>
	)
}
export default Homepage;