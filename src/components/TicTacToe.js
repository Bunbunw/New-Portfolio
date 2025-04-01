import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./TicTacToe.css";

const emptyBoard = Array(9).fill(null);

const checkWinner = (board) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return board.includes(null) ? null : "Draw";
};

const minimax = (board, depth, isMaximizing) => {
  const winner = checkWinner(board);
  if (winner === "X") return -10 + depth;
  if (winner === "O") return 10 - depth;
  if (winner === "Draw") return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = "O";
        let score = minimax(board, depth + 1, false);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = "X";
        let score = minimax(board, depth + 1, true);
        board[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};

const bestMove = (board) => {
  let move;
  let bestScore = -Infinity;
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = "O";
      let score = minimax(board, 0, false);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
};

export default function TicTacToe() {
  const [board, setBoard] = useState(emptyBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const winner = checkWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsXTurn(false);
    
    setTimeout(() => {
      const aiMove = bestMove(newBoard);
      if (aiMove !== undefined && !checkWinner(newBoard)) {
        newBoard[aiMove] = "O";
        setBoard([...newBoard]);
        setIsXTurn(true);
      }
    }, 500);
  };

  const resetGame = () => {
    setBoard(emptyBoard);
    setIsXTurn(true);
  };

  return (
    <div className="ttt-wrapper">
        <p>Beat this Tic Tac Toe ... or resume!</p>
        <div className="board_assist" />
      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="cell"
          >
            {cell === "O" ? (
                <p className="ttt_cell empty">O</p>
            ) : cell === "X" ? (
                <p className="ttt_cell Xchar">X</p>
            ) : (
                <p className="ttt_cell Ochar">_</p>
            )}
          </button>
        ))}
      </div>
      {winner && <p className="mt-4 font-bold">{winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`}</p>}
      <Button onClick={resetGame} className="mt-4">Restart</Button>
    </div>
  );
}
