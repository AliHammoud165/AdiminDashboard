import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types'; // Import IconDefinition type
import imageSrc from '../../assets/Untitled.png'; // Adjust the path to your image
import { cn } from '../../utilts'; // Adjust the path to your cn function file

interface SidebarProps {
  icons: IconDefinition[]; // Define icons prop as an array of IconDefinition
}

const Sidebar: React.FC<SidebarProps> = ({ icons }) => {
  const [selectedIconIndex, setSelectedIconIndex] = React.useState<number | null>(0);

  const handleIconClick = (index: number) => {
    setSelectedIconIndex(index === selectedIconIndex ? null : index);
  };

  return (
    <div>
      <div className='items-center'>
        <img src={imageSrc} alt="Sidebar Image" className='w-[80px] h-[80px]' />
        <div className='w-[100%]'>
          {icons.map((icon, index) => (
            <div
              key={index}
              className={cn(
                'w-full flex items-center justify-center h-[100px] duration-[0.3s]',selectedIconIndex === index ? 'bg-blue-100' : '',
              )}
              onClick={() => handleIconClick(index)}
            >
              <FontAwesomeIcon
                icon={icon}
                className={cn(
                  'text-lg',
                  'mr-2',
                  selectedIconIndex === index ? 'text-blue-500' : 'text-gray-600'                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Sidebar };
