import { CircleQuestionMark, Settings } from "lucide-react";
import { useState } from "react";
import SettingsModal from "../ui/SettingsModal";
import HelpModal from "../ui/HelpModal";
import wordplayLogo from "/wordplay.png"

export const Header = ({ onWordLengthChange, currentWordLength }) => {
    const [activeButton, setActiveButton] = useState(null);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    const handleButtonClick = (option) => {
        setActiveButton(activeButton === option ? null : option);
        
        if (option === 'settings') {
            setIsSettingsOpen(true);
        } else if (option === 'help') {
            setIsHelpOpen(true);
        }
    }

    const handleCloseSettings = () => {
        setIsSettingsOpen(false);
        setActiveButton(null);
    }

    const handleCloseHelp = () => {
        setIsHelpOpen(false);
        setActiveButton(null);
    }

    return (
        <div className="min-w-full border-b border-[#333]">
            <div className="flex justify-between items-center max-w-xl mx-auto px-4">
                <div className="hidden xxs:block xxs:w-18"></div>
                <div className="flex justify-center items-center py-4 sm:py-5">
                    <img 
                        src={wordplayLogo} 
                        alt="Wordplay Logo" 
                        className="block xxs:hidden h-[36px] w-[36px]"
                    />
                    <div
                        className="hidden xxs:block text-center text-white font-bold text-2xl"
                        style={{ fontWeight: "bold" }}
                    >
                        WORDPLAY
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => handleButtonClick('settings')}
                        className={`p-1 rounded-[8px] cursor-pointer transition-colors duration-400 
                            ${activeButton === 'settings'
                                ? 'bg-[#79b85173] text-[#79B851]'
                                : 'bg-[#3D4054] text-white hover:bg-[#79b85173] hover:text-[#79B851]'
                            }`}
                    >
                        <Settings />
                    </button>
                    <button
                        onClick={() => handleButtonClick('help')}
                        className={`p-1 rounded-[8px] cursor-pointer transition-colors duration-400 
                            ${activeButton === 'help'
                                ? 'bg-[#79b85173] text-[#79B851]'
                                : 'bg-[#3D4054] text-white hover:bg-[#79b85173] hover:text-[#79B851]'
                            }`}
                    >
                        <CircleQuestionMark />
                    </button>
                </div>
            </div>
            <SettingsModal
                open={isSettingsOpen}
                onClose={handleCloseSettings}
                onWordLengthChange={onWordLengthChange}
                currentLength={currentWordLength}
            />

            <HelpModal
                open={isHelpOpen}
                onClose={handleCloseHelp}
            />
        </div >
    );
};