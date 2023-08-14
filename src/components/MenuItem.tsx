interface MenuItemProps {
    name: string;
    Icon: React.ComponentType<{ size: number }>;
    onClick: () => void;
}


export default function MenuItem({ name, Icon, onClick }: MenuItemProps) {
  return (
    <a 
    href={`#${name.toLowerCase()}`} 
    onClick={onClick}
    className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
        <Icon size={20}/>
        <span className="pl-4">{ name }</span>
    </a>
  )
}