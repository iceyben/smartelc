import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../components/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("Login successful! Redirecting to dashboard...");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setSuccess("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setSuccess("Login successful! Redirecting to dashboard...");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border px-4 py-10 mx-2 sm:mx-auto">
        <legend className="fieldset-legend text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">Login</legend>

  {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
  {success && <div className="text-green-600 mb-4 text-center">{success}</div>}

        <form onSubmit={handleLogin}>
          <label className="label text-base sm:text-lg md:text-xl font-medium">Email</label>
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
            <span className={loading ? "opacity-50" : ""}>Login</span>
          </button>
        </form>

        <button type="button" onClick={handleGoogleLogin} className="btn btn-outline btn-primary mt-2 w-full text-base sm:text-lg md:text-xl py-2">Login with Google</button>

        <div className="flex justify-between mt-4 text-sm sm:text-base md:text-lg">
          <a href="/signup" className="link link-primary">Sign up</a>
          <a href="/forgot-password" className="link link-secondary">Forgot password?</a>
        </div>
      </fieldset>
    </div>
  );
};

export default Login;
