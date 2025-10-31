// import React, { useState } from "react";
// import "./SignInPopup.css";
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../firebase"; // ✅ correct import path

// export default function SignInPopup({ onClose }) {
//   const [error, setError] = useState("");

//   // Handle Google Sign-In
//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       onClose(); // close popup after successful login
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-container">
//         <button className="close-btn" onClick={onClose}>
//           ✕
//         </button>

//         <h2>Sign in to Airbnb Clone</h2>
//         <p>Use your Google account to continue</p>

//         {error && <p className="error">{error}</p>}

//         <button className="google-btn" onClick={handleGoogleSignIn}>
//           <img
//             src="https://www.svgrepo.com/show/355037/google.svg"
//             alt="Google logo"
//           />
//           Continue with Google
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import "./SignInPopup.css";
import { auth } from "../firebase"; // make sure firebase.js is in src/firebase/firebase.js
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignInPopup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Signed in successfully!");
      }
      onClose();
    } catch (err) {
      console.error("Firebase auth error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="signin-popup-overlay" onClick={onClose}>
      <div
        className="signin-popup"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside popup
      >
        <h2>{isSignUp ? "Create an Account" : "Sign In"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p style={{ color: "red", fontSize: "0.85rem" }}>{error}</p>
          )}

          <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
        </form>
        <p>
          {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
          <span onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default SignInPopup;
