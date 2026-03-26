import { useGame } from "../hooks/useGame";
import { useKeyboard } from "../hooks/useKeyboard";
import { GameBoard } from "../components/game/GameBoard";
import { Keyboard } from "../components/game/Keyboard";
import { Header } from "../components/layout/Header";
import { Container } from "../components/layout/Container";

export const Home = () => {
    const game = useGame()
    useKeyboard(game.handleKey)

    return (
        <Container>
            <Header />

            <GameBoard
                board={game.gameState.board}
                currentRow={game.gameState.currentRow}
                currentGuess={game.gameState.currentGuess}
            />

            <Keyboard onKey={game.handleKey} keyStatus={game.keyStatus} />
            {game.gameState.gameOver && (
                <div>
                    <p>
                        {game.gameState.win ? "Ganaste" : "Perdiste"} - palabra: {game.gameState.solution}
                    </p>

                    <button onClick={game.restartGame}>
                        Nuevo juego
                    </button>
                </div>
            )}
        </Container>
    )
}