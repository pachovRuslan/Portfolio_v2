import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Works } from "./layout/sections/works/Works";
import { Skills } from "./layout/sections/skills/Skills";
import { Contacts } from "./layout/sections/contscts/Contacts";
import { Footer } from "./layout/sections/footer/Footer";
import { AboutMe } from "./layout/sections/about me/AboutMe";


function App() {
  return (
    <div>
      <Header />
      <Main />
      <AboutMe/>
      <Skills />
      <Works />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
