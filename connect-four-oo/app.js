class Game {
    constructor() {
      this.HEIGHT = 6;
      this.WIDTH = 7;
      this.currPlayer = 1;
      this.makeBoard = this.makeBoard();
      this.makeHtmlBoard = this.makeHtmlBoard();
      
    }

    makeBoard() {
        const board = [];
        for (let y = 0; y < this.HEIGHT; y++) {
          board.push(Array.from({ length: this.WIDTH }));
        }
        console.log(board)
        return board;
    };

    makeHtmlBoard() {
        const board = document.getElementById('board');
        // make column tops (clickable area for adding a piece to that column)
        const top = document.createElement('tr');
        top.setAttribute('id', 'column-top');
        top.addEventListener('click', this.handleClick.bind(this));
      
        for (let x = 0; x < this.WIDTH; x++) {
          const headCell = document.createElement('td');
          headCell.setAttribute('id', x);
          top.append(headCell);
        }
      
        board.append(top);
      
        // make main part of board
        for (let y = 0; y < this.HEIGHT; y++) {
          const row = document.createElement('tr');
      
          for (let x = 0; x < this.WIDTH; x++) {
            const cell = document.createElement('td');
            cell.setAttribute('id', `${y}-${x}`);
            row.append(cell);
          }
      
          board.append(row);
        }
    }

    placeInTable(y, x) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.classList.add(`p${this.currPlayer}`);
        piece.style.top = -50 * (y + 2);
      
        const spot = document.getElementById(`${this.y}-${this.x}`);
        spot.append(piece);
    }

    endGame(msg) {
        alert(msg);
    }

    findSpotForCol(x) {
        for (let y = this.HEIGHT - 1; y >= 0; y--) {
          if (!this.board[y][x]) {
            return y;
          }
        }
        return null;
    }

    handleClick(evt) {
        // get x from ID of clicked cell
        const x = +evt.target.id;
      
        // get next spot in column (if none, ignore click)
        const y = this.findSpotForCol(x);
        if (y === null) {
          return;
        }
      
        // place piece in board and add to HTML table
        board[y][x] = this.currPlayer;
        this.placeInTable(y, x);
        
        // check for win
        if (this.checkForWin()) {
          return this.endGame(`Player ${currPlayer} won!`);
        }
        
        // check for tie
        if (board.every(row => row.every(cell => cell))) {
          return this.endGame('Tie!');
        }
          
        // switch players
        this.currPlayer = this.currPlayer === 1 ? 2 : 1;
    }

    checkForWin() {
        function _win(cells) {
          // Check four cells to see if they're all color of current player
          //  - cells: list of four (y, x) cells
          //  - returns true if all are legal coordinates & all match currPlayer
      
          return cells.every(
            ([y, x]) =>
              y >= 0 &&
              y < HEIGHT &&
              x >= 0 &&
              x < WIDTH &&
              board[y][x] === this.currPlayer
          );
        }
      
        for (let y = 0; y < HEIGHT; y++) {
          for (let x = 0; x < WIDTH; x++) {
            // get "check list" of 4 cells (starting here) for each of the different
            // ways to win
            const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
            const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
            const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
            const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
      
            // find winner (only checking each win-possibility as needed)
            if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
              return true;
            }
          }
        }
      }
}

const game = new Game();
game;