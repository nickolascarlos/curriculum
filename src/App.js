import './App.css';
import Curriculum from './components/Curriculum';
import Email from './components/Email';
import Header from './components/Header';
import Location from './components/Location';
import Phone from './components/Phone';
import Body from './components/Body';
import BodyColumn from './components/BodyColumn';
import VerticalDivisor from './components/VerticalDivisor';
import Education from './curriculum/Education';
import ProgrammingLanguages from './curriculum/ProgrammingLanguages';
import OtherTools from './curriculum/OtherTools';
import Courses from './curriculum/Courses';
import Events from './curriculum/Events';
import Languages from './curriculum/Languages';
import Interests from './curriculum/Interests';
import picture from './media/picture';
import AboutMe from './curriculum/AboutMe';
import SocialMedia from './curriculum/SocialMedia';
import Projects from './curriculum/Projects';
import Jobs from './curriculum/Jobs';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Curriculum>
        <Header 
            photo={picture} 
            name={"Nickolas Carlos"}
            title={"Desenvolvedor de Software"}
          />
          
          <Body>
            <BodyColumn flex={2}>
              <SocialMedia/>
              <AboutMe/>
              <ProgrammingLanguages/>
              <OtherTools/>
              <Jobs/>
              <Education/>
              <Languages/>
              {/* <Interests/> */}
              <Section>
                <span style={{color: '#bbb', textAlign: 'center', width: '100%', display: 'block'}}>
                  Atualizado em 19 de outubro de 2025 — Código-fonte disponível em <a style={{color: '#bbb'}} href="https://www.github.com/nickolascarlos">github.com/nickolascarlos</a>
                </span>
              </Section>
            </BodyColumn>

            {/* <VerticalDivisor/>

            <BodyColumn flex={1}>
              <Languages/>
           </BodyColumn> */}
          </Body>
      </Curriculum>
    </div>
  );
}

export default App;
