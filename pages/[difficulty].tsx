import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faFlag } from '@fortawesome/free-solid-svg-icons';


const GameBoard = (props) => {
  const router = useRouter();
  const { difficulty } = router.query;
  const [board, setBoard] = useState([]);

  const generateBoard = (difficulty) => {
    const board = [];
    let rows = 0;
    let columns = 0;
    let bombs = 0;

    // Set board parameters based on difficulty
    switch (difficulty) {
      case 'hard':
        rows: 16;
        columns: 30;
        bombs: 99;
        break;
      case 'medium':
        rows: 16;
        columns: 16;
        bombs: 40;
        break;
      case 'easy':
      default:
        rows = 9;
        columns = 9;
        bombs = 12;
        break;
    }

    // Build board structure
    for(let row = 0; row < rows; row +=1 ) {
      const rowBlock = [];
      for(let col = 0; col < columns; col += 1) {
        const tile = {
          row,
          col,
          isBomb: false,
          isFlag: false,
          isShown: false,
          adjacentBombs: 0,
        };
        rowBlock.push(tile);
      }
      board.push(rowBlock);
    }

    // Place bombs
    let bombsPlaced = 0;
    while (bombsPlaced < bombs) {
      const randomized = (type) => Math.floor(Math.random() * type);
      const randomTile = board[randomized(rows)][randomized(columns)];
      if(!randomTile.isBomb) {
        randomTile.isBomb = true;
        bombsPlaced += 1;
      }
    }

    // TODO: Place adjacent bomb count
    // Place empty tiles? Maybe? Maybe don't need to...

    return board;
  }

  const formattedBoard = generateBoard(difficulty);
  useEffect(() => {
    setBoard(formattedBoard);
  }, []);

  /**
   * @description Checks the tile if it is a bomb or not
   * @param {Number} x - The x coordinate of the tile
   * @param {Number} y - The y coordinate of the tile
   */
  const checkTile = (x, y) => {
    const tile = board[x][y];
    console.log('\n\nLE TILE: ', tile);

    // TODO:
    // 1. Check if bomb
    // 2. Check if number
    // 3. Check if empty
  };

  const boardHeader = (
    <div className="flex justify-between items-center w-full">
      <div className="border border-gray p-2">
        <FontAwesomeIcon icon={faFlag} style={{ fontSize: 25 }} />
      </div>
      <div className="border border-gray p-2">
        <FontAwesomeIcon icon={faFaceSmile} style={{ fontSize: 25 }} />
      </div>
      <div className="border border-gray p-2">00:00</div>
    </div>
  );

  const boardBody = (
    <div>
      {board.map((row, rowIdx) => (
        <div key={`row-${rowIdx}`} className="flex">
          {row.map((col, colIdx) => (
            <button key={`row-${rowIdx}-col-${colIdx}`}
              className="w-full bg-gray-300 border border-black p-2"
              onClick={() => checkTile(rowIdx, colIdx)}>{col.isBomb ? '[B]' : '[N]'}</button>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <main className={styles.main}>
      <h1 className="mb-3">Diffiulty: {difficulty}</h1>
      <div className="flex flex-col justify-center items-center border border-gray">
        {boardHeader}
        {boardBody}
      </div>
    </main>
  );
}

export default GameBoard;
