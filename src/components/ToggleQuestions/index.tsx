import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    id: 1,
    question: "Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?",
    answer: "A Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    question:
      "O que está incluído no Xbox Series X? é o maior planeta do sistema solar?",
    answer: "A Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    question: "Como sei se minha TV é compatível com 4K?",
    answer: "A Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div style={{ maxWidth: "700px", fontFamily: "Arial, sans-serif" }}>
      {questions.map(({ id, question, answer }) => (
        <div key={id} style={{ marginBottom: "10px",  borderBottom: "1px solid #2E2E2E", lineHeight: "30px" }}>
          <div
            onClick={() => toggleQuestion(id)}
            style={{
              padding: "10px",
              backgroundColor: "#0C0C0C",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "5px",
              fontWeight: "bold",
              maxWidth: "900px",
              width: "100%",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {question}
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openQuestion === id ? "auto" : 0,
              opacity: openQuestion === id ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              padding: openQuestion === id ? "10px" : "0px",
              backgroundColor: "#0C0C0C",
              color: "#6c6b6b",
              border: openQuestion === id ? "1px solid #0C0C0C" : "none",
              borderRadius: "5px",
              marginTop: "5px",
              maxWidth: "900px",
              width: "100%",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            <p>{answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
