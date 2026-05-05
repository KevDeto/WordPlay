import { Delete } from "lucide-react";

export const Key = ({ label, onClick, status }) => {

    const getColorState = () => {
        switch (status) {
            case "correct":
                return "text-white bg-[#79B851]";
            case "present":
                return "text-white bg-[#F3C237]";
            case "absent":
                return "text-white bg-[#3D4054]";
            default:
                return "text-white bg-[#656780]";
        }
    };

    const getIconSize = () => {
        return "w-[20px] h-[20px] xs:w-[24px] xs:h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]";
    };

    return (
        <button
            onClick={() => onClick(label)}
            className={`
                m-0.5 p-0.5 xs:p-[4px] sm:m-1 sm:p-2 md:m-1 md:p-2.5
                font-bold text-[12px] xs:text-[15px] sm:text-lg md:text-[23px] ${getColorState()}
                rounded-[8px] cursor-pointer
                ${label === "Enter" || label === "BACKSPACE"
                    ? "flex-1 flex justify-center items-center sm:w-[52px] sm:h-[52px] md:w-[64px] md:h-[64px]"
                    : "w-[35px] h-[40px] xs:w-[44px] xs:h-[50px] sm:w-[52px] sm:h-[52px] md:w-[64px] md:h-[64px]"}
                `}
        >
            {label === "BACKSPACE" ? (
                <Delete className={`${getIconSize()} stroke-current stroke-[1.5]`} />
            ) : (
                <span className="flex items-center justify-center leading-none">
                    {label}
                </span>
            )}
        </button>
    );
};