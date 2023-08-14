interface SideMenuItemProps {
    Icon: React.ComponentType<{ size: number }>;
    itemName: string;
}


export default function SideMenuItem({ Icon, itemName }: SideMenuItemProps) {
    return (
        <a href={`#${itemName.toLowerCase()}`} className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <Icon size={20} />
        </a>
    );
}