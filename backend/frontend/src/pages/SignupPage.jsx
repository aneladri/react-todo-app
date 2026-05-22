import { useState } from "react";

const API_URL = "http://127.0.0.1:8000";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    alert("Signup successful");

    window.location.href = "/login";
  };

  return (
    <div className="app-container">
      <h1>Signup</h1>

      <div className="auth-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={signup}>Signup</button>
      </div>
    </div>
  );
}

export default SignupPage;