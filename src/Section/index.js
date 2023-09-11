const Section = ({ title, body, extraHeaderContent }) => (
    <section>
        <h2 className="list__header">
            <a>{title}</a>
            {extraHeaderContent}
        </h2>
        {body}
    </section>
);

export default Section;