import { useState } from "react";
import { LanguageOption } from "./LanguageOption.interface";

interface LangSelectorProps {
  options: LanguageOption[];
  currentLang: string;
  onChange: (code: string) => void;
}

const LanguageSelector = ({
  options,
  currentLang,
  onChange,
}: LangSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentLangName =
    options.find((option) => option.code === currentLang)?.name ||
    "Select Language";

  const handleLangChange = (code: string) => {
    onChange(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="inline-flex justify-center w-full p-1 text-xl rounded-md font-medium text-gray-700 focus:outline-none cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {currentLangName}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-1 rounded-md shadow-lg">
          <div className="p-2 bg-white rounded-md">
            {options
              .filter((opt) => opt.code !== currentLang)
              .map((option) => (
                <button
                  key={option.code}
                  onClick={() => handleLangChange(option.code)}
                  className={`block w-full text-left text-xl text-gray-700 cursor-pointer`}
                >
                  {option.name}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
