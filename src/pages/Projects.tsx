import { FC } from 'react';

import ProjectItem from "../components/ProjectItem";
import iarabicalho from "../assets/iarabicalho.jpeg"
import trybewallet from "../assets/trybewallet.jpeg";
import mygpt from "../assets/mygpt.jpeg";
import uaisearch from "../assets/uaisearch.jpeg";


const Projects: FC = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center py-8">Here are some of the projects I've developed. Feel free to explore more on my GitHub profile. Any questions, suggestions, or critiques are welcome!</p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={iarabicalho} title='Iara Bicalho Website' tech='Typescript + React + Vite + Tailwind' githubLink='https://github.com/AlexandreRocha-10/iarabicalho-site' appLink='https://iarabicalho.vercel.app/' />
            <ProjectItem img={trybewallet} title='Trybe Wallet' tech='Typescript + React + Vite + Tailwind + Tremor' githubLink='https://github.com/AlexandreRocha-10/dashboard' appLink='https://trybe-wallet-rose-mu.vercel.app/' />
            <ProjectItem img={mygpt} title='MyChatGPT Clone' tech='Next.js + Tailwind + OpenAI APIs' githubLink='https://github.com/AlexandreRocha-10/mygpt' appLink='https://mygptchat.vercel.app/' />
            <ProjectItem img={uaisearch} title='UaiSearch' tech='Next.js + Tailwind + Google APIs  ' githubLink='https://github.com/AlexandreRocha-10/discover' appLink='https://uaisearch.vercel.app/' />
        </div>        
    </div>
  )
}

export default Projects;
