import React, { useState } from 'react'
import { Icon } from '@iconify/react';

const CustomDropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionToggle = (value) => {
      const isSelected = selectedOptions.includes(value);
      setSelectedOptions((prevSelected) =>
        isSelected ? prevSelected.filter((selected) => selected !== value) : [...prevSelected, value]
      );
    };
  
    return (
      <div className="relative">
        <p
          onClick={toggleDropdown}
          className="-mt-[0.02vw] cursor-pointer text-[0.9vw] m-vw border-[1px] h-[3.2vw] font-medium border-gray-400 text-start text-black p-vw w-full max-w-[15vw]"
        >
          {selectedOptions.length > 2 ? `${selectedOptions.length} selected` : selectedOptions.length  <= 2 && selectedOptions.length > 0 ? `${selectedOptions.slice(0, 2).join(', ')}` : selectedOptions.length === 0 ? 'No Preference' :  'No Preference'}
        </p>
        <Icon icon="ep:arrow-down-bold" className='absolute right-[1.6vw] text-black font-bold text-[0.7vw] top-[1.3vw]'/>
        {isOpen && (
          <div className="absolute bg-white ml-vw border border-gray-400 -mt-0.5vw h-[10vw] overflow-y-scroll w-full max-w-[15vw]">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionToggle(option.value)}
                className={`flex p-0.5vw hover:border-dotted border-gray-400 cursor-pointer hover:bg-gray-200 w-full items-center ${
                  selectedOptions.includes(option.value) ? 'bg-gray-200' : ''
                }`}
              >
                <input type="checkbox" className="w-vw h-vw" value={option.value} checked={selectedOptions.includes(option.value)} />
                <span className="text-[0.8vw] ml-0.5vw">{option.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  export default CustomDropdown