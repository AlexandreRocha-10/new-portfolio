import bgphoto from '../assets/bgphoto.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div id="home">
        <img 
        src={bgphoto} 
        alt="bg" 
        className='w-full h-screen object-cover object-right scale-x-[-1]'
        />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Alexandre Rocha</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                <TypeAnimation
                    sequence={[
                        'Developer',
                        2000,
                        'Software Engineer',
                        2000,
                        'Tech Enthusiast',
                        2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    style={{ fontSize: '1em', paddingLeft: '5px' }}
                    repeat={Infinity}
                />
                </h2>
                <div className='flex justify-between pt-6 max-w-[150px] w-full'>
                    <a href="https://github.com/AlexandreRocha-10"><FaGithub className='cursor-pointer' size={20}/></a>
                    <a href="https://www.linkedin.com/in/alexandrerocha10/"><FaLinkedinIn className='cursor-pointer' size={20}/></a>
                    <a href="https://www.instagram.com/oalexandre_rocha/"><FaInstagram className='cursor-pointer' size={20}/></a>
                </div>
            </div>

        </div>
    </div>
  )
}
