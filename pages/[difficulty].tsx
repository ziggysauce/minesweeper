import { useRouter } from 'next/router';
import React, { useState, useEffect, ReactElement, MouseEvent } from 'react';
import classNames from 'classnames'; // TODO: Remove if unused
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faFaceFrown, faFaceLaughBeam, faFlag, faBomb, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

/**
 * @description Generates the board based on difficulty selected
 * @param {string} difficulty - The difficulty selected
 * @returns {object} - The board and the number of bombs
 */
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
        isGameEnd: false,
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

function GameBoard() {
  const router = useRouter();
  const { difficulty } = router.query;

  const [board, setBoard] = useState([] as any);
  const [gameHasEnded, explode] = useState(false);
  const [gameHasWon, setGameStatus] = useState(false);
  const [flags, setFlag] = useState(0);
  const [timer, setBoardTime] = useState(0);
  const [interval, setTimerInterval] = useState(null as any);
  const [clicks, setClick] = useState(0); // This is a hack to get useEffect to run only on proper tile clicks

  useEffect(() => {
    if(!router.isReady) {
      return;
    }

    if(difficulty && clicks === 0) {
      restartBoard();
    }

    if(interval) {
      checkGameEnd();
    }
  }, [clicks, router.isReady]);

  // Prevent default behavior with right click
  // TODO: Only prevent right click on board specifically
  if(typeof window !== 'undefined') {
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
    clearInterval(interval);
    setTimerInterval(null);
    setBoardTime(0);
    setClick(0);
    explode(false);
    setGameStatus(false);
    if(interval) {
      clearInterval(interval);
    }
  }

  /**
   * @description Checks game end logic
   * - Checks if all tiles are revealed or flagged
   * - Properly handles auto-flagging when applicable
   */
  function checkGameEnd() {
    const gameIsComplete = board.every((row: any) => row.every(col: any => col.isShown || col.isFlag || (!col.isShown && col.isBomb)));
    if(gameIsComplete) {
      if(flags !== 0) {
        const boardCopy = JSON.parse(JSON.stringify(board));
        boardCopy.forEach((row: any) => {
          row.forEach((col: any) => {
            if(col.isBomb && !col.isFlag) {
              col.isFlag = true;
            }
          });
        });
        setFlag(0);
      }
      setBoard(boardCopy);
      setGameStatus(true);
      clearInterval(interval);
      setTimerInterval(null);
    }
  }

  /**
   * @description Checks the tile if it is a bomb or not
   * @param {Number} x - The x coordinate of the tile
   * @param {Number} y - The y coordinate of the tile
   */
  const checkTile = (x: number, y: number, e: React.MouseEvent<HTMLButtonElement> | undefined & { button: number }) => {
    if(gameHasEnded) {
      return;
    }

    const rightClick = e?.button === 2;
    const boardCopy = JSON.parse(JSON.stringify(board));
    const { isBomb, isFlag, isShown, adjacentBombs } = board[x][y];

    // Start timer on first click
    if(!interval) {
      const intervalId: number | string| null | any = setInterval(() => {
        setBoardTime((oldTime: number) => {
          return oldTime + 1;
        });
      }, 1000);
      setTimerInterval(intervalId);
    }

    // If already visible, do nothing
    if(isShown || (isFlag && !isShown && !rightClick)) {
      return;
    }

    if(rightClick) {
      boardCopy[x][y].isFlag = !isFlag;
      setFlag(flags + (isFlag ? 1 : -1));
    } else if(isBomb) {
      // explode(true); // TODO: Uncomment this out when done testing
      boardCopy[x][y].isShown = true;
      boardCopy[x][y].isGameEnd = true;

      // Reveal all other bombs
      for(let row = 0; row < boardCopy.length; row += 1) {
        for(let col = 0; col < boardCopy[row].length; col += 1) {
          const tile = boardCopy[row][col];
          if(tile.isBomb) {
            boardCopy[row][col].isShown = true;
          }
        }
      }

      // Stop timer and clear interval
      clearInterval(interval);
      setTimerInterval(null);
    } else if(adjacentBombs === 0) {
      boardCopy[x][y].isShown = true;

      // Store tiles that are now shown
      const revealedTiles = [board[x][y]];

      // Check any adjacent tiles
      const checkSurroundingTiles = (xTile: number, yTile: number) => {
        for(let rowCheck = xTile - 1; rowCheck <= xTile + 1; rowCheck += 1) {
          if(boardCopy[rowCheck]) {
            for(let colCheck = yTile - 1; colCheck <= yTile + 1; colCheck += 1) {
              if(boardCopy[rowCheck][colCheck]) {
                const tileToCheck = boardCopy[rowCheck]?.[colCheck];

                // Only check if not already shown
                if(tileToCheck && !tileToCheck.isShown) {
                  if(tileToCheck.adjacentBombs >= 0) {
                    // If empty or has adjacent bombs, show it
                    boardCopy[rowCheck][colCheck].isShown = true;

                    // If previously marked as flag, remove flag
                    if(tileToCheck.isFlag) {
                      boardCopy[rowCheck][colCheck].isFlag = false;
                      setFlag(flags - 1);
                    }
                  }

                  // If tile has no adjacent bombs, add it to queue to check
                  if(tileToCheck.adjacentBombs === 0) {
                    revealedTiles.push(tileToCheck);
                  }
                }
              }
            }
          }
        }
      }

      // Recursively loop through revealed tiles to check for adjacent tiles
      while(revealedTiles.length) {
        revealedTiles.forEach((tile, idx) => {
          checkSurroundingTiles(tile.row, tile.col);
          revealedTiles.splice(idx, 1);
        });
      }
    } else {
      boardCopy[x][y].isShown = true;
    }
    setBoard(boardCopy);
    setClick(clicks + 1);
  }

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
            <FontAwesomeIcon icon={ faArrowLeft } style={{ fontSize: 15 }} className="mr-2" />
            Back
          </button>
        </Link>
        <h1 className="my-3 text-xl" className={classNames({'my-3 text-2xl': true}, gameHasWon ? 'text-white' : 'text-transparent')}>Congrats! You won!</h1>
        <div className="flex flex-col justify-center items-center border border-gray">
          <div className="flex justify-between items-center w-full">
            <div className="border border-gray p-2">
              {flags}
            </div>
            <button onClick={() => restartBoard()} className="border border-gray p-2 text-yellow-300">
              <FontAwesomeIcon icon={ gameHasEnded ? faFaceFrown : (gameHasWon ? faFaceLaughBeam : faFaceSmile) } style={{ fontSize: 25 }} />
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
                    isGameEnd: boolean,
                    adjacentBombs: number,
                  };
                  const { isBomb, isFlag, isShown, isGameEnd, adjacentBombs } = col as colObj;
                  const numberColors = ['gray', 'blue', 'green', 'red', 'purple', 'amber', 'teal', 'rose', 'black'];
                  let tileColor = isShown ? numberColors[adjacentBombs] : 'gray';
                  let tileContent: ReactElement | null = <span></span>;
                  let bgColor = 'bg-gray-300';
                  let borderStyles = 'border-4 border-t-gray-100 border-l-gray-100 border-b-gray-500 border-r-gray-500';

                  if(isShown) {
                    borderStyles = 'border border-gray-500';
                    if(isBomb) {
                      // Determine bomb or flag icon
                      tileContent = isFlag
                        ? <FontAwesomeIcon icon={faFlag} style={{ fontSize: 15 }} />
                        : <FontAwesomeIcon icon={faBomb} style={{ fontSize: 15 }} />;
                      if(isFlag) {
                        // If bomb and is flag, this is a correctly flagged bomb; do nothing
                        tileColor = 'orange';
                        borderStyles = 'border-4 border-t-gray-100 border-l-gray-100 border-b-gray-500 border-r-gray-500';
                      } else {
                        // If bomb and no flag, show the bomb
                        tileColor = 'slate';
                      }
                      if(isGameEnd) {
                        // Show the site of explosion
                        bgColor = 'bg-red-600';
                        tileColor = 'white';
                      }
                    } else if(adjacentBombs) {
                      // Show the number of adjacent bonmbs
                      tileContent = <span>{adjacentBombs}</span>;
                    } else if(isFlag && gameHasEnded) {
                      // Show incorrectly flagged bomb
                      tileContent = <FontAwesomeIcon icon={faFlag} style={{ fontSize: 15 }} />;
                      tileColor = 'slate';
                      bgColor = 'bg-red-300';
                      borderStyles = 'border-4 border-t-gray-100 border-l-gray-100 border-b-gray-500 border-r-gray-500';
                    }
                  } else if(isFlag) {
                    tileContent = <FontAwesomeIcon icon={faFlag} style={{ fontSize: 15 }} />;
                    tileColor = 'orange';
                    if(!isBomb && gameHasEnded) {
                      // Show incorrectly flagged bomb
                      tileColor = 'slate';
                      bgColor = 'bg-red-300';
                    }
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
