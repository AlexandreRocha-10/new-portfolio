import Sidenav from "./components/Sidenav";
import Home from "./pages/Home";
import WorkList from "./pages/WorkList";
import workData from "./data/WorkData";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";


function App() {
  return (
    <>
      <Sidenav />
      <Home />
      <WorkList workData={workData}/>
      <Projects />
      <Contact />
      <Resume />
    </>
  )
}

export default App
