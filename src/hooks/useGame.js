import { useState, useCallback, useEffect } from "react";
import { evaluateGuess } from "../utils/evaluateGuess";
import { loadWordProgress, saveWordProgress } from "../utils/storage";
import solutions from "../data/solutions.json";
import validWords from "../data/validwords.json";
import { fisherYatesShuffle } from "../utils/shuffle";

const createEmptyBoard = () =>
    Array(6).fill(null).map(() =>
        Array(5).fill(null).map(() => ({ letter: "", status: "" }))
    );

const initGame = () => {
    const { index, list } = loadWordProgress();

    let shuffled = list;

    if (!shuffled) {
        shuffled = fisherYatesShuffle(solutions);
    }
    /*
    const currentIndex = index % shuffled.length;
    const solution = shuffled[currentIndex];

    saveWordProgress(currentIndex, shuffled);
    */

    const nextIndex = (index + 1) % shuffled.length;
    const solution = shuffled[nextIndex];

    saveWordProgress(nextIndex, shuffled);

    return {
        solution,
        shuffled,
        index: nextIndex,
    };
};

export const useGame = () => {
    const [initial] = useState(() => initGame());

    const [gameState, setGameState] = useState(() => {
        //const saved = loadGame();
        //if (saved) return saved;

        return {
            solution: initial.solution,
            board: createEmptyBoard(),
            currentRow: 0,
            currentGuess: "",
            gameOver: false,
            win: false,
        };
    });

    const [wordProgress, setWordProgress] = useState({
        list: initial.shuffled,
        index: initial.index,
    });
    /*
        const [keyStatus, setKeyStatus] = useState(() => {
            const saved = loadGame();
            return saved?.keyStatus || {};
        });
    */
    const [keyStatus, setKeyStatus] = useState({});
    /*
    useEffect(() => {
        saveGame({
            ...gameState,
            keyStatus
        });
    }, [gameState, keyStatus]);
    */
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

        saveWordProgress(nextIndex, wordProgress.list);

        setWordProgress((prev) => ({
            ...prev,
            index: nextIndex,
        }));

        //clearGame();

        return nextSolution;
    };

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
                if (prev.currentGuess.length >= 5) return prev;

                return {
                    ...prev,
                    currentGuess: prev.currentGuess + key,
                };
            }

            if (key === "ENTER") {
                if (prev.currentGuess.length !== 5) return prev;

                const guess = prev.currentGuess.toLowerCase();

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
    }, [wordProgress]);

    const restartGame = () => {
        const newSolution = nextWord();

        setKeyStatus({});

        setGameState({
            solution: newSolution,
            board: createEmptyBoard(),
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
        restartGame
    };
};