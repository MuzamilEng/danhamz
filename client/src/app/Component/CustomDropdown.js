import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const CustomDropdown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionToggle = (option) => {
    setSelectedOptions((prevSelected) => {
      const isSelected = prevSelected.find((selected) => selected.value === option.value);
  
      const updatedSelectedOptions = isSelected
        ? prevSelected.filter((selected) => selected.value !== option.value)
        : [...prevSelected, option];
  
      if (onChange) {
        onChange(updatedSelectedOptions);
      }
  
      return updatedSelectedOptions;
    });
  };
  

  return (
    <div className="relative">
      <p
        onClick={toggleDropdown}
        className="-mt-[0.02vw] cursor-pointer text-[0.9vw] m-vw border-[1px] h-[3.2vw] font-medium border-gray-400 text-start text-black p-vw w-full max-w-[15vw]"
      >
        {selectedOptions.length > 2
          ? `${selectedOptions.length} selected`
          : selectedOptions.length <= 2 && selectedOptions.length > 0
          ? `${selectedOptions.map((option) => option.title).join(', ')}`
          : selectedOptions.length === 0
          ? 'No Preference'
          : 'No Preference'}
      </p>
      <Icon icon="ep:arrow-down-bold" className="absolute right-[2vw] text-black font-bold text-[0.7vw] top-[1.3vw]" />
      {isOpen && (
        <div className="absolute bg-white ml-vw border border-gray-400 -mt-0.5vw h-[10vw] overflow-y-scroll w-full max-w-[15vw]">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionToggle(option)}
              className={`flex p-0.5vw hover:border-dotted border-gray-400 cursor-pointer hover:bg-gray-200 w-full items-center ${
                selectedOptions.find((selected) => selected.value === option.value) ? 'bg-gray-200' : ''
              }`}
            >
              <input
                type="checkbox"
                className="w-vw h-vw"
                value={option.value}
                checked={selectedOptions.find((selected) => selected.value === option.value)}
              />
              <span className="text-[0.8vw] ml-0.5vw">{option.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
