import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>
        Error 404
      </h1>
      <p>
        Poxa que pena, não encontramos essa página :(
      </p>
      <Link to="/" className="btn">
        Voltar para página principal
      </Link>
    </div>
  );
};

export default About;