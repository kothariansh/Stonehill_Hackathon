import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase-config";
import { useNavigate } from 'react-router';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  let navigate = useNavigate();

  const register = async (e) => {
	  e.preventDefault();
	  try {
		  createUserWithEmailAndPassword(auth, email, password)
		  await addDoc(collection(db, "users"), {
			  email: email,
			  username: username,
			  password: password,
			  university: university,
			  degree: degree,
		  })
		  navigate("/profiles");
	  } catch(error) {
		  alert(error.message);
	  }
  }

  const login = async (e) => {
	  e.preventDefault();
	  try {
		  signInWithEmailAndPassword(auth, email, password);
		  console.log('signed in successfully!');
		  navigate("/profiles");
	  } catch(error) {
		  alert(error.message);
	  }
  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form>
		  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder='Email' required />
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
		  <input type="text" value={university} onChange={(e) => setUniversity(e.target.value)} className="input" placeholder='University' required />
		  <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} className="input" placeholder='Degree' required />
          <div align="center">
            <button className="Register" onClick={register}>
              <span>Register</span>
            </button>
          </div>
		  <div align="center">
		  	<button className="Login" onClick={login}>
				  <span>Login</span>
			</button>
		  </div>
        </form>
      </div>
    </div>

  );
};

export default LoginForm;