import { FC } from 'react';

import ProjectItem from "../components/ProjectItem";
import iarabicalho from "../assets/iarabicalho.jpeg"
import solarsystem from "../assets/solarsystem.jpeg";
import trybetunes from "../assets/trybetunes.jpeg";
import tryunfo from "../assets/tryunfo.jpeg";


const Projects: FC = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center py-8">Here are some of the projects I've developed. Feel free to explore more on my GitHub profile. Any questions, suggestions, or critiques are welcome!</p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={iarabicalho} title='Iara Bicalho Website' tech='Typescript + React + Vite + Tailwind' githubLink='https://github.com/AlexandreRocha-10/iarabicalho-site' appLink='https://iarabicalho.vercel.app/' />
            <ProjectItem img={solarsystem} title='Solar System' tech='React.JS' githubLink='#' appLink='#' />
            <ProjectItem img={trybetunes} title='Trybetunes' tech='React.JS' githubLink='#' appLink='#' />
            <ProjectItem img={tryunfo} title='Tryunfo' tech='React.JS' githubLink='#' appLink='#' />
        </div>        
    </div>
  )
}

export default Projects;
