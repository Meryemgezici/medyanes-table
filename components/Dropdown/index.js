"use client";
import {
  faBriefcase,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Dropdown = ({ options, selectedOption, onOptionSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block md:w-64">
      <div
        className="bg-white border rounded px-4 py-2 cursor-pointer flex justify-between items-center transition-all duration-500 ease-in-out transform hover:scale-105 hover:border-TealishBlue"
        onClick={() => setIsOpen(!isOpen)}
      >
       <span className={
            placeholder === "Bakiye Sırala" ? "hidden md:block" : ""
          }>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        {placeholder === "Bakiye Sırala" && (
          <FontAwesomeIcon
            size={"xl"}
            icon={faMoneyCheckDollar}
            className="mx-2 text-TealishBlue block md:hidden"
          />
        )}
        {/* {placeholder === "Tüm İşlem Türleri" && (
          <FontAwesomeIcon
          size={"xl"}
            icon={faBriefcase}
            className="mx-2 text-TealishBlue block md:hidden"
          />
        )} */}

        <span
          className={`transform transition-transform text-NavySky`}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 bg-white border rounded shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 border border-transparent hover:bg-blue-200 hover:text-TealishBlue cursor-pointer transition-all duration-500 ease-in-out transform "
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
