import './App.css';
import Curriculum from './components/Curriculum';
import Email from './components/Email';
import Header from './components/Header';
import Location from './components/Location';
import Phone from './components/Phone';
import Section from './components/Section';
import picture from './picture';
import Body from './components/Body';
import BodyColumn from './components/BodyColumn';
import VerticalDivisor from './components/VerticalDivisor';
import Education from './curriculum/Education';
import ProgrammingLanguages from './curriculum/ProgrammingLanguages';
import BulletList from './components/BulletList';
import SkillBar from './components/SkillBar';
import PythonIcon from './icons/PythonIcon';
import OtherTools from './curriculum/OtherTools';
import Courses from './curriculum/Courses';
import Events from './curriculum/Events';
import Languages from './curriculum/Languages';
import Interests from './curriculum/Interests';

function App() {
  return (
    <div className="App">
      <Curriculum>
        <Header 
            photo={picture} 
            name={"Nickolas Carlos"}
            title={"Desenvolvedor Back-end"}
          >
            <Email>nickolascarlos@gmail.com</Email>
            <Phone>(64) 99300-3667</Phone>
            <Location>Goiânia - Goiás</Location>
          </Header>

          <Body>
            <BodyColumn flex={2}>
              <Education/>
              <ProgrammingLanguages/>
              <OtherTools/>
              <Courses/>
              <Events/>
            </BodyColumn>

            <VerticalDivisor/>

            <BodyColumn flex={1}>
              <Languages/>
              <Interests/>
           </BodyColumn>
          </Body>
      </Curriculum>
    </div>
  );
}

export default App;
