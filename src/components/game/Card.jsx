import { useEffect, useState } from "react";

export const Card = ({ cell, index }) => {
    const [isBouncing, setIsBouncing] = useState(false);
    
    useEffect(() => {
        if (cell.letter && cell.letter !== '') {
            setIsBouncing(true);
            const timer = setTimeout(() => setIsBouncing(false), 150);
            return () => clearTimeout(timer);
        }
    }, [cell.letter]);


    const getColorState = () => {
        switch (cell.status) {
            case "correct":
                return "bg-[#79B851] border-2 border-[#79B851] [transform:rotateX(360deg)]"
            case "present":
                return "bg-[#F3C237] border-2 border-[#F3C237] [transform:rotateX(360deg)]"
            case "absent":
                return "bg-[#3D4054] border-2 border-[#3D4054] [transform:rotateX(360deg)]"
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
                transition-all duration-350
                transform-3d backface-hidden
                ${getColorState()}
                ${isBouncing ? 'scale-80' : 'scale-100'}`}
            style={{
                transitionDelay: cell.status ? `${index * 190}ms` : '0ms',
            }}
        >
            {cell.letter.toUpperCase()}
        </div>
    )
}