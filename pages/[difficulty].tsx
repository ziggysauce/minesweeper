import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import classNames from 'classnames'; // TODO: Remove if unused
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faFlag, faBomb } from '@fortawesome/free-solid-svg-icons';


const GameBoard = (props) => {
  const router = useRouter();
  const { difficulty } = router.query; // FIXME: This doesn't work without navigation
  const [board, setBoard] = useState([]);
  const [gameEnd, explode] = useState(false);

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
    for(let row = 0; row < rows; row += 1) {
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

    // Fill in numbers to display adjacent bombs
    for(let row = 0; row < rows; row += 1) {
      for(let col = 0; col < columns; col += 1) {
        const tile = board[row][col];
        if(!tile.isBomb) {
          // Iterate through surrounding tiles to check for adjacent bomb count
          let adjacentBombs = 0;
          for(let rowCheck = -1; rowCheck < 2; rowCheck += 1) {
            for(let colCheck = -1; colCheck < 2; colCheck += 1) {
              const tileToCheck = board[row + rowCheck]?.[col + colCheck];
              if(tileToCheck?.isBomb) {
                adjacentBombs += 1;
              }
            }
          }
          tile.adjacentBombs = adjacentBombs;
        }
      }
    }

    return board;
  }

  useEffect(() => {
    const formattedBoard = generateBoard(difficulty);
    setBoard(formattedBoard);
  }, []);

  /**
   * @description Checks the tile if it is a bomb or not
   * @param {Number} x - The x coordinate of the tile
   * @param {Number} y - The y coordinate of the tile
   */
  const checkTile = (x, y) => {
    const { isBomb, isFlag, isShown } = board[x][y];

    // TODO:
    if(isBomb) {
      explode(true);
    }
    // 2. Check if number
    // 3. Check if empty
    // 4. If isShown, do nothing
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
          {row.map((col, colIdx) => {
            const { isBomb, isFlag, isShown, adjacentBombs } = col;
            const numberColors = ['gray', 'blue', 'green', 'red', 'purple', 'amber', 'teal', 'rose', 'black'];
            let tileColor = numberColors[adjacentBombs];
            let tileContent = '[X]';

            if(isBomb) {
              tileContent = <FontAwesomeIcon icon={faBomb} style={{ fontSize: 15 }} />;
              tileColor = 'red';
            } else if(adjacentBombs) {
              tileContent = `[${adjacentBombs}]`;
            }

            return (
              <button key={`row-${rowIdx}-col-${colIdx}`}
                className={`w-full bg-gray-300 border border-black p-2 text-${tileColor}-600`}
                onClick={() => checkTile(rowIdx, colIdx)}>
                {tileContent}
              </button>
            )}
          )}
        </div>
      ))}
    </div>
  );


  let headerColor = 'text-green-600';
  if(difficulty === 'medium') {
    headerColor = 'text-yellow-600';
  } else if(difficulty === 'hard') {
    headerColor = 'text-red-600';
  }
  return (
    <main className={styles.main}>
      <h1 className={classNames({'mb-3': true}, {[headerColor]: true})}>Diffiulty: {difficulty}</h1>
      <div className="flex flex-col justify-center items-center border border-gray">
        {boardHeader}
        {boardBody}
      </div>
    </main>
  );
}

export default GameBoard;
