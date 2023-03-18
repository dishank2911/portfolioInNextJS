// import Header from "../Pages/header"
import Home from "../components/home"
import About from "../components/about"
import Services from "../components/services"
import Project from "../components/project"
import Skill from "../components/skill"
import Form from "../components/form"
import Footer from "../components/footer"
import FrontAnimation from "../components/frontAnimation"



function App() {


  return (<>
    {/* <Header /> */}
    <FrontAnimation />
    <Home />
    <About />
    <Services />
    <Project />
    <Skill />
    <Form />
    <Footer />
  </>
  )
}

export default App