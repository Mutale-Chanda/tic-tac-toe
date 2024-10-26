import { getWinner } from "../utils/utils";
import Square from "./square";
import { BoardProps } from "../Interfaces/interfaces";

const Board = ({ onPlay, xIsNext, squares }: BoardProps) => {
  const hanleClick = (index: number) => {
    if (getWinner(squares) || squares[index]) return;
    const next: Array<string> = [...squares];
    next[index] = xIsNext ? "X" : "O";
    onPlay(next);
  };

  const winner = getWinner(squares);
  const status = winner ? `Winner is: ${winner}` : `next player: ${(xIsNext ? "X" : "O")}`;

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => hanleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => hanleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => hanleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => hanleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => hanleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => hanleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => hanleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => hanleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => hanleClick(8)} />
      </div>
    </>
  );
};

export default Board;
