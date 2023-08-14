import { FC } from 'react';
import WorkItem from '../components/WorkItem'; 

interface WorkDataItem {
  year: string;
  title: string;
  duration: string;
  details: string;
}

interface WorkListProps {
  workData: WorkDataItem[];
}

const WorkList: FC<WorkListProps> = ({ workData }) => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {workData.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default WorkList;