
export const Key = ({ label, onClick, status }) => {

    const getColorState = () => {
        switch (status) {
            case "correct":
                return "text-white bg-[#6aaa64]";
            case "present":
                return "text-white bg-[#c9b458]";
            case "absent":
                return "text-white bg-gray-500";
            default:
                return "text-black bg-white";
        }
    };

    return (
        <button
            onClick={() => onClick(label)}
            className={`
                m-0.5 p-0.5 xs:p-[4px] sm:m-1 sm:p-2 md:m-1 md:p-2.5
                font-bold text-[12px] xs:text-[15px] sm:text-lg md:text-[23px] ${getColorState()}
                border-black border-2 rounded-[4px] cursor-pointer
                shadow-[2.4px_2.4px_6px_0px_rgb(18,18,18)] sm:shadow-[2.4px_2.4px_5px_1px_rgb(18,18,18)]
                ${label === "ENTER" || label === "BACKSPACE" 
                    ? "flex-1 sm:w-[52px] sm:h-[52px] md:w-[64px] md:h-[64px]" 
                    : "w-[35px] h-[40px] xs:w-[44px] xs:h-[50px] sm:w-[52px] sm:h-[52px] md:w-[64px] md:h-[64px]" }
                `}
        >
            {label === "BACKSPACE" ? "⌫" : label}
        </button>
    );
};