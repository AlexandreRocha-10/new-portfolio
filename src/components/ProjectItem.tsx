import { FC } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectItemProps {
  img: string;
  title: string;
  tech: string;
  githubLink: string;
  appLink: string;
}

const ProjectItem: FC<ProjectItemProps> = ({ img, title, tech, githubLink, appLink }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt={title} className='rounded-xl group-hover:opacity-10'/>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
            {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <div className='flex space-x-8 items-center justify-center h-auto w-full'>
            <a
            href={githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white text-center underline hover:opacity-80'
            >
                <FiGithub size={30}/>
            </a>
            <br />
            <a
            href={appLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white text-center underline hover:opacity-80'
            >
                <FiExternalLink size={30}/>
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
