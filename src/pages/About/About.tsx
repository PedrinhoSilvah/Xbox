import { images } from "../../images";
import "./styles.scss";

const About = () => (
  <>
    <header>
      <div className="Navigation">
        <div>
          <img src={images[0]} alt="" />
        </div>
        <nav>
          <li>visão geral</li>
          <li>jogos</li>
          <li>galeria</li>
          <li>unbox</li>
        </nav>
      </div>
      <a>ver disponibilidade</a>
    </header>

    <div className="sobre">
      <h1>Xbox series X</h1>
      <p>PEDIDO ANTECIPADO</p>

      <img src={images[1]} alt="" />
    </div>
  </>
);

export default About;
