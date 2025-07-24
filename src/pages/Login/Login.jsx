import styles from "./Login.module.css";
import { toast, ToastContainer } from "react-toastify";

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error: authError, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    if ( !email || !password ) {
      toast.warning("Por favor preencha todos os campos");
      return;
    }

    const res = await login(user);
    navigate('/dashboard');
    console.log(res);
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (authError) {
      toast.error(authError)
    }
  }, [authError]);

  return (
    <div className={styles.login}>
      <Navbar/>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="E-mail do usuário"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            placeholder="Insira a senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {!loading && <button className="btn">Entrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
        />
      </form>
      <Footer/>
    </div>
  );
};

export default Login;