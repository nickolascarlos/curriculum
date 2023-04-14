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
import picture from './picture';
import AboutMe from './curriculum/AboutMe';
import SocialMedia from './curriculum/SocialMedia';
import Projects from './curriculum/Projects';

function App() {
  return (
    <div className="App">
      <Curriculum>
        <Header 
            photo={picture} 
            name={"Nickolas Carlos"}
            title={"Desenvolvedor de Software"}
          >
            <Email>nickolascarlos@gmail.com</Email>
            <Phone>(64) 99300-3667</Phone>
            <Location>Goiânia - Goiás</Location>
          </Header>

          <Body>
            <BodyColumn flex={2}>
              <AboutMe/>
              <Education/>
              <ProgrammingLanguages/>
              <OtherTools/>
              <Courses/>
              <Events/>
            </BodyColumn>

            <VerticalDivisor/>

            <BodyColumn flex={1}>
              <SocialMedia/>
              <Languages/>
              <Projects/>
              <Interests/>
           </BodyColumn>
          </Body>
      </Curriculum>
    </div>
  );
}

export default App;
