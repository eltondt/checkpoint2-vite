import styles from "../LoginForm/loginForm.module.css";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAppContext } from "../../contexts/AppContext";

const LoginForm = () => {
  const apiUrl = "https://dhodonto.ctd.academy";
  const navigate = useNavigate();
  const {state, dispatch } = useAppContext();

  const loginMutation = useMutation(async (credentials) => {
    try {
      const response = await axios.post(`${apiUrl}/auth`, credentials);

      if (response.status === 200) {
        dispatch({ type: "SET_TOKEN", token: response.data.token });

        return response.data;
      } else {
        throw new Error("Erro ao fazer login");
      }
    } catch (error) {
      throw new Error("Erro ao fazer login");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: e.target.login.value,
      password: e.target.password.value,
    };

    try {
      const response = await loginMutation.mutateAsync(formData);
      navigate("/home", response);

      alert("Login bem-sucedido");
    } catch (error) {
      alert("Erro ao fazer login");
    }
  };

  return (
    <>
      <div className={`text-center card container ${styles.card}`}>
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
