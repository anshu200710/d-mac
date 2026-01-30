import React from "react";
import { loginUser, registerUser } from "../api/auth";

const Login = () => {
  React.useEffect(() => { document.title = 'Login — D-MAC'; }, []);

  const [mode, setMode] = React.useState("login");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let data;

      if (mode === "login") {
        data = await loginUser({
          email: formData.email,
          password: formData.password,
        });
      } else {
        data = await registerUser({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      alert(
        mode === "login"
          ? "Login successful ✅"
          : "Account created successfully 🎉"
      );
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {mode === "login" ? "Login" : "Sign Up"}
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Please {mode === "login" ? "sign in" : "create an account"} to continue
        </p>

        {/* Name */}
        {mode === "register" && (
          <input
            type="text"
            name="name"
            placeholder="Full name"
            className="mt-8 w-full h-12 rounded-full px-5 border border-gray-300 text-sm outline-none"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email id"
          className="mt-6 w-full h-12 rounded-full px-5 border border-gray-300 text-sm outline-none"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mt-4 w-full h-12 rounded-full px-5 border border-gray-300 text-sm outline-none"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Error */}
        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-5 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90"
        >
          {loading
            ? "Please wait..."
            : mode === "login"
            ? "Login"
            : "Sign Up"}
        </button>

        <p className="text-gray-500 text-sm mt-4 mb-11">
          {mode === "login"
            ? "Don’t have an account?"
            : "Already have an account?"}
          <span
            onClick={() =>
              setMode((prev) => (prev === "login" ? "register" : "login"))
            }
            className="text-indigo-500 ml-1 cursor-pointer hover:underline"
          >
            {mode === "login" ? "Sign up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
