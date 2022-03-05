import React, { useState, useEffect } from "react";
import '../style/Subject.css';
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../scripts/firebase-config";
import Header from "./Header";
const Biology = () => {
	const [title, setTitle] = useState('');
	const [usefulness, setUsefulness] = useState('');
	const [link, setLink] = useState('');
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		onSnapshot(collection(db, 'biology-flashcards'), (snapshot) =>
			setNotes(snapshot.docs.map(doc => doc.data())))
	}, [])
	const addNote = async (e) => {
		e.preventDefault();
		await addDoc(collection(db, "biology-flashcards"), {
			title: title,
			link: link,
			usefulness: usefulness,
		})
	}
	return (
		<React.Fragment>
			<Header />
			<div class="container my-3">
				<h1>Welcome To the Biology Courses view</h1>
				<div class="card">
					<div class="card-body">
						<div class="form-group">
							<h5 class="card-title">Add Course name</h5>
							<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
						</div>

						<h5 class="card-link">How did you find this course useful in your life or day-to-day work?</h5>
						<div class="form-group">
							<textarea class="form-control" id="addLink" rows="2" value={usefulness} onChange={(e) => setUsefulness(e.target.value)}></textarea>


						</div>

						<h5>Course Link</h5>
						<div class="form-group">

							<textarea class="form-control" id="addTxt" rows="1" value={link} onChange={(e) => setLink(e.target.value)}></textarea>
						</div>





						<button class="btn btn-primary" id="addBtn" onClick={addNote}>Add Note</button>
				</div>
				</div>
					<div style={{ align: "left" }}>
						<h1>Yours and Other People's courses</h1>
					</div>
					{notes.map((note) => (
						<div class="noteCard my-2 mx-2 card" style={{width: "18rem"}}>
							<div class="card-body">
								<h5 class="card-title">{note.title}</h5>
								<p class="card-link">{note.link}</p>
								<p class="card-text">{note.usefulness}</p>
								<button onclick="deleteNote(this.id)" class="btn btn-primary">Delete Course</button>
							</div>
						</div>
					))}
			</div>

			<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
				integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
				crossorigin="anonymous"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
				integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
				crossorigin="anonymous"></script>
			<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
				integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
				crossorigin="anonymous"></script>
			<script src="fheifbeuf3bu.js"></script>
		</React.Fragment>
	)
}
export default Biology;