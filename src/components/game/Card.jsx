
export const Card = ({ cell }) => {
    const getColorState = () => {
        switch (cell.status) {
            case "correct":
                return "bg-[#79B851] border-2 border-[#79B851]"
            case "present":
                return "bg-[#F3C237] border-2 border-[#F3C237]"
            case "absent":
                return "bg-[#3D4054] border-2 border-[#3D4054]"
            default:
                return "bg-[#191A24] border-2 border-[#3e4154]" //#656780
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
                rounded-[8px] text-white
                ${getColorState()}`}
        >
            {cell.letter.toUpperCase()}
        </div>
    )
}