import { Header } from "./styled.js";

const Section = ({ title, body, extraHeaderContent }) => (
    <section>
        <Header>
            <h2>{title}</h2>
            {extraHeaderContent}
        </Header>
        {body}
    </section>
);

export default Section;