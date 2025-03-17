import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Przemysław Pacek"
      body={
        <>
          W życiu zajmowałem się różnymi rzeczami, pracowałem w wielu firmach i
          na różnych stanowiskach, między innymi w branży <i>finansowej</i> oraz{" "}
          <i>RTV-AGD</i>. Jednak zawsze z tyłu głowy miałem myśl o
          programowaniu. Impulsem do podjęcia kursu na{" "}
          <strong>Frontend Developer</strong> było szkolenie na operatora maszyn{" "}
          <i>CNC</i>, gdzie zetknąłem się z programowaniem i to mi się bardzo
          spodobało 🙂
        </>
      }
    />
  </Container>
);
