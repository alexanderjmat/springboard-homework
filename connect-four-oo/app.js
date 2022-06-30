
const body = document.querySelector('body');
body.addEventListener('click', function(e) {
    if (e.target.id == 'restart') {
        location.reload();
    };
})


class Game {
    constructor(p1, p2) {
      this.players = [p1, p2]   
      this.HEIGHT = 6;
      this.WIDTH = 7;
      this.currPlayer = p1;
      this.board = [];
      this.makeBoard();
      this.makeHtmlBoard();
      
    }

    makeBoard() {
        for (let y = 0; y < this.HEIGHT; y++) {
          this.board.push([]);
          for (let x = 0; x < this.WIDTH; x++) {
            this.board[y].push(0);
          }
        }
        console.log(this.board)
        return this.board;
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
        piece.classList.add(`p${this.players.indexOf(this.currPlayer) + 1}`);
        piece.style.top = -50 * (y + 2);
      
        const spot = document.getElementById(`${y}-${x}`);
        spot.append(piece);
    }

    endGame(msg) {
        alert(msg);
        document.querySelector('#game').style.pointerEvents = 'none';
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
        this.board[y][x] = this.players.indexOf(this.currPlayer) + 1;
        this.placeInTable(y, x);
        
        // check for win
        if (this.checkForWin()) {
          return this.endGame(`Player ${this.currPlayer} won!`);
        }
        
        // check for tie
        if (this.board.every(row => row.every(cell => cell))) {
          return this.endGame('Tie!');
        }
          
        // switch players
        this.currPlayer == p1 ? this.currPlayer = p2 : this.currPlayer = p1;
    }

    checkForWin() {
        const _win = (cells) => {
          // Check four cells to see if they're all color of current player
          //  - cells: list of four (y, x) cells
          //  - returns true if all are legal coordinates & all match currPlayer
      
          return cells.every(
            ([y, x]) =>
              y >= 0 &&
              y < this.HEIGHT &&
              x >= 0 &&
              x < this.WIDTH &&
              this.board[y][x] === this.currPlayer
          );
        }
      
        for (let y = 0; y < this.HEIGHT; y++) {
          for (let x = 0; x < this.WIDTH; x++) {
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

class Player { 
    constructor(color) {
        this.color = color;
    }
}

// document.getElementById('start').addEventListener('click', (e) => {
//     e.preventDefault();
//     let p1 = new Player(document.getElementById('p1').value);
//     let p2 = new Player(document.getElementById('p2').value);
//     new Game(p1, p2);
//   });

const button = document.getElementById('start');
button.addEventListener('click', function() {
    button.remove();
    const restart = document.createElement('button')
    restart.id = 'restart';
    restart.innerText = 'Restart the game';
    document.querySelector('body').append(restart);
    let p1 = new Player(document.getElementById('p1').value)
    let p2 = new Player(document.getElementById('p2').value)
    new Game(p1, p2);
})

// let p1 = new Player('green')
// let p2 = new Player('orange')
// let game = new Game(p1, p2);


// const g = new Game((document.getElementById('p1').value, document.getElementById('p2').value));