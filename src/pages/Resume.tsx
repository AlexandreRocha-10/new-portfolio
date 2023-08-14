import { FaFilePdf } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

const Resume = () => {
  return (
    <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Resume</h1>
      <div className="relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl py-12">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-lg mb-4">
          <FaFilePdf className="text-white text-2xl" />
        </div>
        <p className="text-lg mb-4">Download PDF resume</p>
        <a
          href={resume}
          download='Alexandre Rocha - CV'
          className="bg-[#001b5e] text-gray-100 w-full p-4 rounded-lg text-center"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default Resume;
