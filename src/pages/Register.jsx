import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../components/firebase';
import { db } from '../components/firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Save name and role to Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        role,
      });
      setSuccess("Registration successful! Redirecting to dashboard...");
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleRegister = async () => {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // Save name and role to Firestore
      await setDoc(doc(db, "users", result.user.uid), {
        name: result.user.displayName || "",
        email: result.user.email,
        role,
      });
      setSuccess("Registration successful! Redirecting to dashboard...");
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-180 md:min-h-screen w-full">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border px-4 py-10 mx-2 sm:mx-auto">
        <legend className="fieldset-legend text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">Register</legend>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        {success && <div className="text-green-600 mb-4 text-center">{success}</div>}

        <form onSubmit={handleRegister}>
          <label className="label text-base sm:text-lg md:text-xl font-medium">Name</label>
          <input
            type="text"
            className="input text-base sm:text-lg md:text-xl py-2 px-3 w-full"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <label className="label text-base sm:text-lg md:text-xl font-medium mt-4">Email</label>
          <input
            type="email"
            className="input text-base sm:text-lg md:text-xl py-2 px-3 w-full"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label className="label text-base sm:text-lg md:text-xl font-medium mt-4">Password</label>
          <input
            type="password"
            className="input text-base sm:text-lg md:text-xl py-2 px-3 w-full"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <label className="label text-base sm:text-lg md:text-xl font-medium mt-4">Role</label>
          <select
            className="input text-base sm:text-lg md:text-xl py-2 px-3 w-full"
            value={role}
            onChange={e => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            className="btn btn-neutral mt-4 w-full text-base sm:text-lg md:text-xl py-2 relative flex items-center justify-center"
            disabled={loading}
          >
            {loading && (
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="w-6 h-6 rounded-full border-4 border-t-4 border-gray-300 border-t-green-600 animate-spin inline-block bg-transparent"></span>
              </span>
            )}
            <span className={loading ? "opacity-50" : ""}>Register</span>
          </button>
        </form>

        <button type="button" onClick={handleGoogleRegister} className="btn btn-outline btn-primary mt-2 w-full text-base sm:text-lg md:text-xl py-2">Register with Google</button>

        <div className="flex justify-between mt-4 text-sm sm:text-base md:text-lg">
          <a href="/login" className="link link-primary">Already have an account?</a>
        </div>
      </fieldset>
    </div>
  );
}

export default Register
