import { FC } from 'react';

import ProjectItem from "../components/ProjectItem";
import shoppingcart from "../assets/shoppingcart.jpeg";
import solarsystem from "../assets/solarsystem.jpeg";
import trybetunes from "../assets/trybetunes.jpeg";
import tryunfo from "../assets/tryunfo.jpeg";


const Projects: FC = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos nobis nesciunt, temporibus voluptatibus ut quisquam officiis excepturi ad quas. Impedit ipsam earum possimus at voluptate, quidem saepe nemo voluptates</p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={shoppingcart} title='Shopping Cart' tech='React.JS' githubLink='#' appLink='#' />
            <ProjectItem img={solarsystem} title='Solar System' tech='React.JS' githubLink='#' appLink='#' />
            <ProjectItem img={trybetunes} title='Trybetunes' tech='React.JS' githubLink='#' appLink='#' />
            <ProjectItem img={tryunfo} title='Tryunfo' tech='React.JS' githubLink='#' appLink='#' />
        </div>        
    </div>
  )
}

export default Projects;
