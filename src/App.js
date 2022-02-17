import Portfolio from './Protofolio';
import HeroSection from './HeroSection';
import Skills from './Skills';
import Footer  from './contact';
function App(){
  return (
    <div className="App">
      <header className="App-header">
        <HeroSection ></HeroSection>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Footer></Footer>
       
      </header>
    </div>
  );
}

export default App;