import Section from "../components/Section";

export default function AboutMe(props) {
    return (
        <Section title="A bit about me 🤝">
    <article style={{
        fontSize: '11pt',
        textAlign: 'justify',
        color: '#505050'
    }}>
        <p>I am a Computer Science student at the Federal University of Goiás and I am seeking opportunities to enhance my skills as a software developer and grow both professionally and personally.</p>

        <p>I have experience in both back-end and front-end, excelling in creating REST APIs with Python, JavaScript, and C#, using frameworks such as Django, Nest.js, and ASP.NET.</p>
        
        <p>Additionally, I have experience with relational database modeling and occasional experience with non-relational databases, as well as experience with software testing and architectural patterns.</p>
        
        <p>In front-end, I am proficient in HTML, CSS, JavaScript, React, and Electron, with familiarity in Django Template Language. Although my focus is on back-end development, I can be productive in both areas.</p>
    </article>
</Section>
    )
}