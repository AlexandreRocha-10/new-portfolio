import { useState } from "react";
import { AiOutlineMenu, AiOutlineTool, AiOutlineHome, AiOutlineProject, AiOutlineFile, AiOutlineContacts } from 'react-icons/ai';
import MenuItem from "./MenuItem";
import SideMenuItem from "./SideMenuItem";

const iconMapping: { [key: string]: React.ComponentType<{ size: number }> } = {
    Home: AiOutlineHome,
    Work: AiOutlineTool,
    Projects: AiOutlineProject,
    Resume: AiOutlineFile,
    Contact: AiOutlineContacts,
};


export default function Sidenav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);
  const handleMenuItemClick = () => handleNav();

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
        {
            nav ? (
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                    {Object.keys(iconMapping).map((itemName) => (
                        <MenuItem 
                        key={itemName}
                        name={itemName}
                        Icon={iconMapping[itemName]}
                        onClick={handleMenuItemClick}
                        />
                    ))}
                </div>
            ) : (
                ''
            )
        }
        <div className="md:block hidden fixed top-[25%] z-10">
            <div className="flex flex-col">
                {Object.keys(iconMapping).map((itemName) => (
                    <SideMenuItem
                    key={itemName}
                    Icon={iconMapping[itemName]}
                    itemName={itemName.toLowerCase()}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}
