import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const admin = { email: "admin@gmail.com", password: "123456", isAdmin: true };
    const user = { email: "user@gmail.com", password: "123456", isAdmin: false };

    let loggedUser = null;

    if (email === admin.email && password === admin.password) {
      loggedUser = admin;
      alert("Bienvenue Admin 👑");
      navigate("/admin");
    } else if (email === user.email && password === user.password) {
      loggedUser = user;
      alert("Bienvenue Utilisateur 👤");
      navigate("/");
    } else {
      alert("Email ou mot de passe incorrect !");
      return;
    }

    localStorage.setItem("user", JSON.stringify(loggedUser));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 rounded bg-gray-700 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full mb-6 p-2 rounded bg-gray-700 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 rounded p-2 transition">
          Se connecter
        </button>
      </form>
    </div>
  );
}
