import styles from "../Footer/footer.module.css";
import { useAppContext } from "../../contexts/AppContext";

const Footer = () => {

  const { state } = useAppContext();
  const isDark = state.tema === "dark";

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <button className={`btn btn-danger ${styles.top}`} onClick={scrollToTop}>Voltar para o topo</button>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a class navbar-dark bg-dark ou navbar-light bg-light  */}
        <div className={`${styles.footer} ${isDark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
          <div className="container">
            <div className={`row`}>
              <div className="col-sm-12 col-lg-6">
                {/* //Na linha seguinte deverá ser feito um teste se a aplicação
                // está em dark mode e deverá utilizar o css correto */}
                <img className={`${styles.dhLogo} ${isDark && styles.iconsDark}`} src="../src/assets/DH.png" alt='DH-logo' />
              </div>
              <div className={`col-sm-12 col-lg-6 ${styles.icons}
              ${isDark && styles.iconsDark}`}>
                <img src="../src/assets/ico-facebook.png" alt="ícone do facebook" className={styles.icon} />
                <img src="../src/assets/ico-instagram.png" alt="ícone do instagram" className={styles.icon} />
                <img src="../src/assets/ico-whatsapp.png" alt="ícone do whatsapp" className={styles.icon} />
                <img src="../src/assets/ico-tiktok.png" alt="ícone do tiktok" className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}


export default Footer