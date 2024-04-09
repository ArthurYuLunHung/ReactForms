import { useState, useEffect } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (username.length < 8 && username) {
      setError("please enter username that is at least 8 characters long");
    } else {
      setError("");
    }
  }, [username]);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const result = await response.json();
      console.log(result);
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div>
        <h2>Sign Up!</h2>
        <h3>Your username must be eight characters in length</h3>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
