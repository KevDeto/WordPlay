import { Key } from "./Key"

const rows = [
    "QWERTYUIOP",
    "ASDFGHJKLÑ",
    "ZXCVBNM"
];

export const Keyboard = ({ onKey, keyStatus }) => {

    return (
        <div className="m-14 max-xxs:w-screen">
            {rows.map((row, col) => (
                <div
                    key={col}
                    className="flex justify-center"
                >
                    {col === 2 && (
                        <Key label="BACKSPACE" onClick={onKey} />
                    )}

                    {row.split("").map((k) => (
                        <Key
                            key={k}
                            label={k}
                            onClick={onKey}
                            status={keyStatus[k]}
                        />
                    ))}

                    {col === 2 && (
                        <Key label="ENTER" onClick={onKey} />
                    )}
                </div>
            ))}
        </div>
    )
}