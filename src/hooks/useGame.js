import { useState, useCallback, useEffect } from "react";
import { evaluateGuess } from "../utils/evaluateGuess";
import { loadWordProgress, saveWordProgress } from "../utils/storage";
import solutions4 from "../data/solutions-4.json";
import solutions5 from "../data/solutions-5.json";
import solutions6 from "../data/solutions-6.json";
import validWords4 from "../data/validwords-4.json";
import validWords5 from "../data/validwords-5.json";
import validWords6 from "../data/validwords-6.json";
import { fisherYatesShuffle } from "../utils/shuffle";

// CHANGE: función para obtener JSON según longitud
const getSolutionsByLength = (length) => {
    if (length === 4) return solutions4;
    if (length === 6) return solutions6;
    return solutions5; // default 5
};

const getValidWordsByLength = (length) => {
    if (length === 4) return validWords4;
    if (length === 6) return validWords6;
    return validWords5; // default 5
};

// CHANGE: crear board con columnas dinámicas
const createEmptyBoard = (cols = 5) =>
    Array(6).fill(null).map(() =>
        Array(cols).fill(null).map(() => ({ letter: "", status: "" }))
    );

// CHANGE: initGame ahora acepta wordLength
const initGame = (wordLength = 5) => {
    const solutions = getSolutionsByLength(wordLength);
    const { index, list, length } = loadWordProgress();

    let shuffled = (list && length === wordLength) ? list : fisherYatesShuffle(solutions);

    const nextIndex = (index + 1) % shuffled.length;
    const solution = shuffled[nextIndex];

    saveWordProgress(nextIndex, shuffled, wordLength);

    return {
        solution,
        shuffled,
        index: nextIndex,
        wordLength,
    };
};

export const useGame = () => {
    // CHANGE: estado para longitud actual
    const [wordLength, setWordLength] = useState(5);
    const [initial] = useState(() => initGame(wordLength));

    const [gameState, setGameState] = useState(() => {
        return {
            solution: initial.solution,
            board: createEmptyBoard(wordLength),
            currentRow: 0,
            currentGuess: "",
            gameOver: false,
            win: false,
        };
    });

    const [wordProgress, setWordProgress] = useState({
        list: initial.shuffled,
        index: initial.index,
        length: wordLength,
    });

    const [keyStatus, setKeyStatus] = useState({});

    // CHANGE: función para cambiar longitud de palabra
    const changeWordLength = (newLength) => {
        if (newLength === wordLength) return;
        
        setWordLength(newLength);
        const newInitial = initGame(newLength);
        
        setWordProgress({
            list: newInitial.shuffled,
            index: newInitial.index,
            length: newLength,
        });
        
        setKeyStatus({});
        
        setGameState({
            solution: newInitial.solution,
            board: createEmptyBoard(newLength),
            currentRow: 0,
            currentGuess: "",
            gameOver: false,
            win: false,
        });
    };

    const updateKeyStatus = (evaluated) => {
        setKeyStatus((prev) => {
            const next = { ...prev };

            evaluated.forEach(({ letter, status }) => {
                const upper = letter.toUpperCase();
                const current = next[upper];

                if (
                    current === "correct" ||
                    (current === "present" && status === "absent")
                ) return;

                next[upper] = status;
            });

            return next;
        });
    };

    const nextWord = () => {
        const nextIndex = (wordProgress.index + 1) % wordProgress.list.length;
        const nextSolution = wordProgress.list[nextIndex];

        saveWordProgress(nextIndex, wordProgress.list, wordLength);

        setWordProgress((prev) => ({
            ...prev,
            index: nextIndex,
        }));

        return nextSolution;
    };

    // CHANGE: handleKey ahora usa wordLength dinámico
    const handleKey = useCallback((key) => {
        setGameState((prev) => {
            if (prev.gameOver) return prev;

            if (key === "BACKSPACE") {
                return {
                    ...prev,
                    currentGuess: prev.currentGuess.slice(0, -1),
                };
            }

            if (/^[A-ZÑ]$/.test(key)) {
                if (prev.currentGuess.length >= wordLength) return prev;

                return {
                    ...prev,
                    currentGuess: prev.currentGuess + key,
                };
            }

            if (key === "Enter") {
                if (prev.currentGuess.length !== wordLength) return prev;

                const guess = prev.currentGuess.toLowerCase();
                const validWords = getValidWordsByLength(wordLength);

                if (!validWords.includes(guess)) {
                    return prev;
                }

                const evaluated = evaluateGuess(guess, prev.solution);

                const newBoard = prev.board.map((row, i) =>
                    i === prev.currentRow ? evaluated : row
                );

                updateKeyStatus(evaluated);

                const isWin = guess === prev.solution;
                const isLastRow = prev.currentRow === 5;

                if (isWin || isLastRow) {
                    return {
                        ...prev,
                        board: newBoard,
                        currentGuess: "",
                        currentRow: prev.currentRow + 1,
                        gameOver: true,
                        win: isWin,
                    };
                }

                return {
                    ...prev,
                    board: newBoard,
                    currentGuess: "",
                    currentRow: prev.currentRow + 1,
                };
            }

            return prev;
        });
    }, [wordProgress, wordLength]);

    const restartGame = () => {
        const newSolution = nextWord();

        setKeyStatus({});

        setGameState({
            solution: newSolution,
            board: createEmptyBoard(wordLength),
            currentRow: 0,
            currentGuess: "",
            gameOver: false,
            win: false,
        });
    };

    return {
        gameState,
        handleKey,
        keyStatus,
        restartGame,
        changeWordLength,  // CHANGE: exportar función
        wordLength,        // CHANGE: exportar estado
    };
};