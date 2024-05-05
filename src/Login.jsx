import { useState } from "react";

function Login() {
  const [searchLetter, setSearchLetter] = useState("");

  const validateUsername = (event) => {
    const value = event.target.value;
    setSearchLetter(value);
    if (value.toLowerCase().includes("o")) {
      setSearchLetter("");
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };

  const registerUser = () => {
    if (searchLetter === "") {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <div>
      <label htmlFor="inputUserName5">Usuario</label>
      <input
        type="text"
        id="inputUserName5"
        placeholder="Ingrese su usuario"
        onChange={validateUsername}
        value={searchLetter}
      />
      <button type="button" onClick={registerUser}>
        Registrarse
      </button>
      <p>{searchLetter}</p>
    </div>
  );
}

export default Login;
