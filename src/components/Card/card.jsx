import styles from "../Card/card.module.css";
import { useAppContext } from "../../contexts/AppContext";

const Card = () => {

  const { state } = useAppContext();
  const isDark = state.tema === "dark";

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card ${isDark && styles.cardDark}`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <a href={`/dentist/MatriculaDoDentista`}>
            <h5 className={`card-title ${styles.title}`}>Nome e Sobrenome do dentista</h5>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
