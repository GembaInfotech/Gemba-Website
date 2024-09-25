import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";


function Login ()  {
//   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add logic for sign in (e.g., API call, authentication) 
  };

//   const openSignup = () => {
//     navigate("/signup");
//   };

  return (
    <div
      className="flex items-center justify-end h-screen"
    //   style={{
    //     backgroundImage: `url(${bgImage})`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center",
    //     opacity: 0.7,
    //   }}
    >
      <div className="bg-opacity-0.25 w-full h-full top-0 left-0"></div>
      <div className="relative z-10 flex justify-end mr-14">
        <div className="bg-gray-300 p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email or Username
              </label>
              <input
                type="text"
                className="form-control w-full px-4 py-2 border rounded-md"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control w-full px-4 py-2 border rounded-md"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-2 top-4 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>
            <div className="form-group mb-4">
              <input
                type="checkbox"
                className="form-check-input mr-2"
                id="rememberMe"
              />
              <label
                className="form-check-label text-gray-700"
                htmlFor="rememberMe"
              >
                Remember Me
              </label>
            </div>
            <div className="form-submit mb-4">
              <button
                type="submit"
                className="btn btn-primary w-full bg-indigo-600 text-white py-2 rounded-md"
              >
                Sign in
              </button>
            </div>
            <div className="text-center">
              <span>New on our platform?</span>
              <button
                // onClick={openSignup}
                className="text-indigo-800 ml-2 underline"
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
