import React from 'react';
import styles from '../styles/damasboard.module.css';

const DamasBoard = () => {
  const renderSquares = () => {
    const squares = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isWhite = (row + col) % 2 === 0;
        let pieceColor = null;

        // Define as posições iniciais das peças
        if (row === 0 && col === 0||row === 0 && col === 2 ||row === 0 && col === 4 ||row === 0 && col === 6 ||row === 1 && col === 1 ||row === 1 && col === 3 ||row === 1 && col === 5 ||row === 1 && col === 7 ||row === 2 && col === 0 ||row === 2 && col === 2 ||row === 2 && col === 4 ||row === 2 && col === 6){
          pieceColor = 'black'; // Peças pretas
        } else if (row === 5 && col === 0||row === 5 && col === 2 ||row === 5 && col === 4 ||row === 5 && col === 6 ||row === 6 && col === 1 ||row === 6 && col === 3 ||row === 6 && col === 5 ||row === 6 && col === 7 ||row === 7 && col === 0 ||row === 7 && col === 2 ||row === 7 && col === 4 ||row === 7 && col === 6) {
          pieceColor = 'red'; // Peças vermelhas
        }

        squares.push(
          <div
            key={`${row}-${col}`}
            className={`${styles.square} ${isWhite ? styles.white : styles.black}`}
          >
            {pieceColor && (
              <div
                className={`${styles.piece} ${pieceColor === 'red' ? styles.redPiece : styles.blackPiece}`}
              />
            )}
          </div>
        );
      }
    }
    return squares;
  };

  return <div className={styles.board}>{renderSquares()}</div>;
};

export default DamasBoard;