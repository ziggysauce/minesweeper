import { useRouter } from 'next/router';
import React, { useState, useEffect, ReactElement, MouseEvent } from 'react';
import classNames from 'classnames'; // TODO: Remove if unused
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faFlag, faBomb, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const generateBoard = (difficulty: string | string[] | undefined) => {
  const board = [];
  let rows = 0;
  let columns = 0;
  let bombs = 0;

  // Set board parameters based on difficulty
  // TODO: If mobile, invert rows and columns for hard
  switch (difficulty) {
    case 'hard':
      rows = 16;
      columns = 30;
      bombs = 99;
      break;
    case 'medium':
      rows = 16;
      columns = 16;
      bombs = 40;
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
    const randomized = (structureCount: number) => Math.floor(Math.random() * structureCount);
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

  return { board, bombs };
}

const GameBoard = () => {
  const router = useRouter();
  const { difficulty } = router.query;

  const [board, setBoard] = useState([] as any);
  // const [gameHasBegun, startGame] = useState(false);
  const [gameHasEnded, explode] = useState(false);
  const [flags, setFlag] = useState(0);
  const [timer, setBoardTime] = useState(0);
  const [interval, setTimerInterval] = useState(null);

  useEffect(() => {
    if(!router.isReady) {
      return;
    }

    if(difficulty) {
      const formattedBoard = generateBoard(difficulty);
      setBoard(formattedBoard.board);
      setFlag(formattedBoard.bombs);
    }
  }, [router.isReady]);

  // Prevent default behavior with right click
  // TODO: Only prevent right click on board
  if (typeof window !== 'undefined') {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }

  /**
   * @description Restarts the game:
   * - Resets the board with new tiles
   * - Resets the timer
   */
  function restartBoard() {
    const formattedBoard = generateBoard(difficulty);
    setBoard(formattedBoard.board);
    setFlag(formattedBoard.bombs);
    setTimerInterval(null);
    setBoardTime(0);
    if(interval) {
      clearInterval(interval);
    }
  }

  /**
   * @description Checks the tile if it is a bomb or not
   * @param {Number} x - The x coordinate of the tile
   * @param {Number} y - The y coordinate of the tile
   */
  const checkTile = (x: number, y: number, e: React.MouseEvent<HTMLButtonElement> | undefined & { button: number }) => {
    const rightClick = e?.button === 2;
    const boardCopy = JSON.parse(JSON.stringify(board));
    const { isBomb, isFlag, isShown } = board[x][y];

    // If already visible, do nothing
    if(isShown && !isFlag) {
      return;
    }

    if(isBomb) {
      explode(true);
      boardCopy[x][y].isShown = true;
      setTimerInterval(null);
      clearInterval(interval);
    } else if(rightClick) {
      boardCopy[x][y].isFlag = !isFlag;
      boardCopy[x][y].isShown = !isFlag;
      setFlag(flags + (isFlag ? 1 : -1));
    } else {
      boardCopy[x][y].isShown = true;
    }
    setBoard(boardCopy);
    // 2. Check if number
    // 3. Check if empty => show all empty adjacent spaces
    // 4. If isShown, do nothing

  // FIXME: Timer logic
  if(!interval) {
      const intervalId: string | number | Timeout | undefined = setInterval(() => {
        setBoardTime(timer + 1);
      }, 1000);
      setTimerInterval(intervalId);
    }
  };

  let headerColor = 'text-green-600';
  if(difficulty === 'medium') {
    headerColor = 'text-yellow-600';
  } else if(difficulty === 'hard') {
    headerColor = 'text-red-600';
  }
  if(difficulty) {
    return (
      <main className={styles.main}>
        <Link href="/">
          <button className="bg-zinc-700 hover:bg-zinc-800 p-2 m-2 rounded absolute top-0 left-0">
            <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 15 }} className="mr-2" />
            Back
          </button>
        </Link>
        {/** FIXME: Get these colors to work below */}
        <h2 className="text-slate-600">Something fun!</h2>
        <h2 className="text-blue-600">Something blue!</h2>
        <h2 className="text-orange-600">Something orange!</h2>
        <h1 className={classNames({'mb-3': true}, {[headerColor]: true})}>Diffiulty: {difficulty}</h1>
        <div className="flex flex-col justify-center items-center border border-gray">
          <div className="flex justify-between items-center w-full">
            <div className="border border-gray p-2">
              {flags}
            </div>
            <button onClick={() => restartBoard()} className="border border-gray p-2">
              <FontAwesomeIcon icon={ faFaceSmile } style={{ fontSize: 25 }} />
            </button>
            <div className="border border-gray p-2">{timer}</div>
          </div>
          <div>
            {board.map((row: object[], rowIdx: number) => (
              <div key={`row-${rowIdx}`} className="flex">
                {row.map((col: object, colIdx: number) => {
                  type colObj = {
                    isBomb: boolean,
                    isFlag: boolean,
                    isShown: boolean,
                    adjacentBombs: number,
                  };
                  const { isBomb, isFlag, isShown, adjacentBombs } = col as colObj;
                  const numberColors = ['gray', 'blue', 'green', 'red', 'purple', 'amber', 'teal', 'rose', 'black'];
                  let tileColor = isShown ? numberColors[adjacentBombs] : 'gray';
                  let tileContent: ReactElement | null = <span></span>;
                  let bgColor = 'bg-gray-300';
                  let borderStyles = 'border-4 border-t-gray-100 border-l-gray-100 border-b-gray-500 border-r-gray-500';

                  if(isShown) {
                    if(isBomb) {
                      tileContent = <FontAwesomeIcon icon={faBomb} style={{ fontSize: 15 }} />;
                      tileColor = 'slate';
                    } else if(isFlag) {
                      tileContent = <FontAwesomeIcon icon={faFlag} style={{ fontSize: 15 }} />;
                      tileColor = 'orange';
                    } else if(adjacentBombs) {
                      tileContent = <span>{adjacentBombs}</span>;
                    }
                    borderStyles = 'border border-gray-500';
                  }

                  return (
                    <button key={`row-${rowIdx}-col-${colIdx}-${isShown}`}
                      className={`w-8 h-8 font-bold ${borderStyles} text-${tileColor}-600 ${bgColor}`}
                      onMouseUp={(e) => checkTile(rowIdx, colIdx, e)}>
                      {tileContent}
                    </button>
                  )}
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default GameBoard;
