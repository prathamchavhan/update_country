import { useState } from "react";
import { supabase } from "../createClient";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!email || !password) {
      setErrorMsg("Email and password are required.");
      return;
    }

  
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      if (error.message.toLowerCase().includes("user already registered")) {
        alert("User already exists. Redirecting to login...");
        navigate("/login");
      } else {
        setErrorMsg(error.message);
      }
    } else {
      
      const userId = data.user?.id;
      if (userId) {
        const { error: insertError } = await supabase.from("profiles").insert([
          {
            id: userId,
            email: email,
            password: password,
          },
        ]);

        if (insertError) {
          setErrorMsg("Signup succeeded, but profile insert failed.");
          console.error(insertError);
          return;
        }

        alert("Signup successful! Redirecting to login.");
        navigate("/login");
      }
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>Signup</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Signup</button>
        {errorMsg >{errorMsg}}
      </div>
    </div>
  );
}
