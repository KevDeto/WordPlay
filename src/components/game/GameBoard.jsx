import { Row } from "./Row"

export const GameBoard = ({ board, currentRow, currentGuess }) => {

    const getMergedRow = (row, rowIndex) => {
        if (rowIndex !== currentRow) {
            return row;
        }
        return row.map((cell, i) => ({
            letter: currentGuess[i] || "",
            status: ""
        }));
    }

    return (
        <div className="">
            {board.map((row, col) => (
                <Row key={col} row={getMergedRow(row, col)} />
            ))}
        </div>
    )
}