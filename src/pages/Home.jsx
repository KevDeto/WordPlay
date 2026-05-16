import { useGame } from "../hooks/useGame";
import { useKeyboard } from "../hooks/useKeyboard";
import { GameBoard } from "../components/game/GameBoard";
import { Keyboard } from "../components/game/Keyboard";
import { Header } from "../components/layout/Header";
import { Container } from "../components/layout/Container";
import Modal from "../components/ui/Modal";
import { useEffect, useState } from "react";

export const Home = () => {
    const game = useGame()
    useKeyboard(game.handleKey)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (game.gameState.gameOver) {
            const timer = setTimeout(() => setShowModal(true), 1200)
            return () => clearTimeout(timer)
        }
    }, [game.gameState.gameOver])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (game.gameState.gameOver && !showModal && e.key === "Enter") {
                setShowModal(true);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [game.gameState.gameOver, showModal]);

    const handleVirtualKey = (key) => {
        if (game.gameState.gameOver && !showModal && key === "Enter") {
            setShowModal(true);
            return;
        }
        game.handleKey(key);
    };

    const closeModal = () => setShowModal(false);

    const handleRestart = () => {
        game.restartGame();
        setShowModal(false);
    };

    return (
        <Container>
            <Header
                onWordLengthChange={game.changeWordLength}
                currentWordLength={game.wordLength}
            />
            <div className={`m-auto w-[90%] ${game.isShaking ? "shake" : ""}`}>
                <GameBoard
                    board={game.gameState.board}
                    currentRow={game.gameState.currentRow}
                    currentGuess={game.gameState.currentGuess}
                />
            </div>
            <Keyboard
                onKey={handleVirtualKey}
                keyStatus={game.keyStatus}
            />
            {showModal && (
                <Modal
                    isOpen={showModal}
                    onClose={closeModal}
                    onReset={handleRestart}
                    word={game.gameState.solution}
                    game={game}
                />
            )}
        </Container>
    );
};