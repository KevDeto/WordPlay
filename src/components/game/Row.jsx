import { Card } from "./Card"

export const Row = ({ row }) => {
    return (
        <div className="flex justify-center">
            {row.map((cell, i) => (
                <Card key={i} cell={cell}/>
            ))}
        </div>
    )
}