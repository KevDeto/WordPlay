import { useGame } from "../hooks/useGame";
import { useKeyboard } from "../hooks/useKeyboard";
import { GameBoard } from "../components/game/GameBoard";
import { Keyboard } from "../components/game/Keyboard";
import { Header } from "../components/layout/Header";
import { Container } from "../components/layout/Container";
import Modal from "../components/ui/Modal";

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
                    <Modal game={game} onReset={game.restartGame} word={game.gameState.solution}/>
                </div>
            )}
        </Container>
    )
}
{/*revisar porque tomo "cuajo" como palabra ganadora si en solutions no estaba, solo estaba en validwords*/}