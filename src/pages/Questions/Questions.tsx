import "./styles.scss";
import FAQ from "../../components/ToggleQuestions";
import { images } from "../../images";

const Questions = () => {
  return (
    <>
      <section>
        <div className="container">
          <h4 className="Questions">
            <span>Perguntas</span> frequentes
          </h4>
          <div className="faq">
            <FAQ />
          </div>
        </div>
      </section>

      <footer>
        <img
          src={images[0]}
          alt=""
        />
        <div className="Text">
          <p>© Microsoft 2022</p>
          <p>Todos os direitos reservados</p>
        </div>
      </footer>
    </>
  );
};

export default Questions;
