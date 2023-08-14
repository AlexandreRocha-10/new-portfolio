import { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { GiBrazilFlag, GiUsaFlag } from 'react-icons/gi';
import resumeEN from '../assets/resumeEN.pdf';
import resumePT from '../assets/resumePT.pdf';

const Resume = () => {
  const [selectedResume, setSelectedResume] = useState(resumeEN);

  const handleDownloadEN = () => setSelectedResume(resumeEN);
  const handleDownloadPT = () => setSelectedResume(resumePT);

  return (
    <div id="resume" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">Resume</h1>
      <div className="flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl py-12">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-lg">
            <FaFilePdf className="text-white text-2xl" />
          </div>
          <p className="text-lg ml-4">Choose your download language:</p>
          <div className="flex gap-2 ml-4">
            <button
              onClick={handleDownloadEN}
              className={`${
                selectedResume === resumeEN ? 'bg-[#001b5e] text-gray-100' : 'bg-gray-100 text-gray-400'
              } w-10 h-10 rounded-lg text-center flex items-center justify-center`}
            >
              <GiUsaFlag className="text-xl" />
            </button>
            <button
              onClick={handleDownloadPT}
              className={`${
                selectedResume === resumePT ? 'bg-[#001b5e] text-gray-100' : 'bg-gray-100 text-gray-400'
              } w-10 h-10 rounded-lg text-center flex items-center justify-center`}
            >
              <GiBrazilFlag className="text-xl" />
            </button>
          </div>
        </div>
        <a
          href={selectedResume}
          download="Alexandre Rocha - CV"
          className="bg-[#001b5e] text-gray-100 w-full p-4 rounded-lg text-center"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default Resume;
