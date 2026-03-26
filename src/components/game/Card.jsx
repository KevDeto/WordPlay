
export const Card = ({ cell }) => {
    const getColorState = () => {
        switch (cell.status) {
            case "correct":
                return "bg-green-600 text-white"
            case "present":
                return "bg-yellow-400 text-white"
            case "absent":
                return "bg-gray-500 text-white"
            default:
                return "bg-white text-black"
        }
    }

    return (
        <div
            className={`
                flex
                justify-center items-center
                w-[50px] h-[50px] xs:w-[64px] xs:h-[64px] md:w-[72px] md:h-[72px]
                m-[3.4px]
                font-bold text-3xl xs:text-4xl md:text-5xl
                rounded-[4px] 
                border-2 border-black 
                shadow-[2.4px_2.4px_5px_1px_rgb(18,18,18)]
                ${getColorState()}`}
        >
            {cell.letter.toUpperCase()}
        </div>
    )
}