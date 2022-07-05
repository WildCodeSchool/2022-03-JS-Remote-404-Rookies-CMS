import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ExportContext from "../contexts/Context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState();
  const { setUser } = useContext(ExportContext.Context);

  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMsg("Veuillez renseigner vos identifiants");
      return;
    }
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {
        email,
        password,
      })
      .then((res) => {
        setUser(res.data);
        navigate("/dashboard/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form className="flex flex-col justify-center mb-10  text-center  ">
      <div className="rounded-md shadow-md border-2 bg-zinc-100 m-3 mt-[2.5rem] p-3 w-[100%] md:w-[70%] lg:w-[50%]  mx-auto mt-32 space-y-4 flex flex-col justify-center">
        <p>Connexion</p>
        <label htmlFor="Email">
          <input
            type="email"
            placeholder="Email"
            className="p-3 w-[90%]"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="Password">
          <input
            type="password"
            placeholder="Mot de passe"
            className="p-3 w-[90%]"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <div className="px-5 mt-3 flex flex-row justify-between">
          <button
            className="pt-2 pb-3 pl-3 pr-3 rounded-full buttonNav mr-10 text-xl text-white"
            type="button"
            onClick={(e) => handleClick(e)}
          >
            {msg && <p>{msg}</p>}
            <p>Se connecter</p>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;
