import { useEffect } from "react";

export const useKeyboard = (onKey) => {

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key

            if (key === "Enter") {
                e.preventDefault();
                e.stopPropagation();
                onKey("ENTER")
            } else if (key === "Backspace") {
                onKey("BACKSPACE")
            } else if (/^[a-zñA-ZÑ]$/.test(key)) {
                onKey(key.toUpperCase())
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [onKey]);
}