import { useState } from "react";

const API_URL = "http://127.0.0.1:8000";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const formData = new URLSearchParams();

    formData.append("username", username);
    formData.append("password", password);

    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    if (!response.ok) {
      alert("Login failed");
      return;
    }

    const data = await response.json();

    localStorage.setItem("token", data.access_token);

    window.location.href = "/";
  };

  return (
    <div className="app-container">
      <h1>Login</h1>

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

        <button onClick={login}>Login</button>

        <p>
          Need an account? <a href="/signup">Signup</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;