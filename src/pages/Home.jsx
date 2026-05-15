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
        } else {
            setShowModal(false)
        }
    }, [game.gameState.gameOver])

    return (
        <Container>
            <Header
                onWordLengthChange={game.changeWordLength}
                currentWordLength={game.wordLength}
            />
            
            <GameBoard
                board={game.gameState.board}
                currentRow={game.gameState.currentRow}
                currentGuess={game.gameState.currentGuess}
            />

            <Keyboard onKey={game.handleKey} keyStatus={game.keyStatus} />
            {showModal && (
                <Modal game={game} onReset={game.restartGame} word={game.gameState.solution} />
            )}
        </Container>
    )
}