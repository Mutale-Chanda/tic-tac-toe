import { useState } from "react";
import Board from "./board";

const getMoves = (history: Array<string[]>, callBack : (index: number) => void) => {
  const moves = history.map((_history, index) => {
    let btnDesc;
    if (index > 0) {
      btnDesc = "Go to move #" + index;
    } else {
      btnDesc = "Go to game start";
    }

    return (
      <li key={index}>
        <button onClick={() => callBack(index)}>{btnDesc}</button>
      </li>
    );
  });

  return moves
}

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill("")]);
  const [currentMove, setCurrentMove] = useState<number>(0)
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: Array<string>) => {
  const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) =>{
    setCurrentMove(nextMove);
  }

  const moves = getMoves(history, jumpTo)

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
};

export default Game;
