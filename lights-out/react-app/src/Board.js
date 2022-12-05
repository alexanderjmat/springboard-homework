import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  function randomBoolean() {
    const num = Math.floor(Math.random() * 2)
    if (num == 0) return false;
    return true;
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < ncols; i++) {
      initialBoard.push([])
      for (let j = 0; j < nrows; j++) {
        initialBoard[i].push(randomBoolean())
      }
    }
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      console.log(coord)
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          if (boardCopy[y][x]) {
            boardCopy[y][x] = false
          }
          else {
            boardCopy[y][x] = true

          }

        }
        
      };

      // TODO: Make a (deep) copy of the oldBoard
      const deepCopy = oldBoard.map(row => [...row])


      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, deepCopy)
      flipCell(y + 1, x, deepCopy)
      flipCell(y - 1, x, deepCopy)
      flipCell(y, x + 1, deepCopy)
      flipCell(y, x - 1, deepCopy)

      // TODO: return the copy
      // console.log(deepCopy)
      return deepCopy
    });

  }

  // if the game is won, just show a winning msg & render nothing else

  if (hasWon()) return (
    <h1>Congrats, you won!</h1>
  )

  // TODO

  // make table board

  return (
    <div>
      <table className="Board">
      <tbody>{board.map((column, idx) => <tr>{column.map((row, index) => <Cell flipCellsAroundMe={() => flipCellsAround(`${idx}-${index}`)} isLit={row}/>)}</tr>)}</tbody>
      </table>


    </div>
    
    
  )

  // TODO
}

export default Board;
