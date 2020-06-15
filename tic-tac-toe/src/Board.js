import React from 'react';
import './App.css'
import Box from './Box';
class Board extends React.Component {
  constructor() {
    super();
    //if 0 then turn of 0 else turn of x
    let board = [];
    for(let i=0;i<3;i++) {
      board.push(['','','']);
    }
    this.state = {
      board:board,
      turn: 0,
      winner: 'p' // if this is empty then gaame is still going on X O draw
    }
    this.updateBoard = this.updateBoard.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }
  updateBoard(row,col) {
    let gameBoard = this.state.board;
    if(gameBoard[row][col] !== '' || this.state.winner !== 'p') {
      return ;
    }
    let turn = this.state.turn;
    if(this.state.turn === 0) {
      gameBoard[row][col] = 'O';
      turn = 1;
    } else {
      gameBoard[row][col] = 'X';
      turn = 0;
    }
    this.setState({
      board:gameBoard,
      turn: turn
    }, () => {
      this.setState({
        winner: this.checkWinner(this.state.board)
      })
    })
  }
  checkWinner(feild) {
        // check row wise
      for (let i = 0; i < 3; i++) {
          if (feild[i][0] === feild[i][1] && feild[i][1] === feild[i][2] && feild[i][0] !== "" && feild[i][1] !== "" && feild[i][2] !== "") {
              return this.state.turn === 1 ? 'O' : 'X';
          }
      }
      for (let i = 0; i < 3; i++) {
          if (feild[0][i] === feild[1][i] && feild[1][i] === feild[2][i] &&  feild[0][i] !== "" && feild[1][i] !== "" && feild[2][i] !== "") {
            return this.state.turn === 1 ? 'O' : 'X';
          }
      }
      if (feild[0][0] === feild[1][1] && feild[1][1] === feild[2][2] && feild[0][0] !== "" && feild[1][1] !== "" && feild[2][2] !== "") {
        return this.state.turn === 1 ? 'O' : 'X';
      }
      if (feild[0][2] === feild[1][1] && feild[1][1] === feild[2][0]  && feild[0][2] !== ""  && feild[1][1] !== ""  && feild[2][0] !== "") {
        return this.state.turn === 1 ? 'O' : 'X';
      }

      let count = 0;
      for(let i=0;i<3;i++)
      {
          for(let j=0;j<3;j++)
          {
              if(feild[i][j] !== "")
              count++;
          }
      }

      if(count === 9)
      return 'd';

      return 'p';
  }
  render() {
    return (
      <div className='board'>
        {this.state.winner === 'p' ? <h1>tic-tac-toe</h1> : <h1>Winner is {this.state.winner}</h1>}
        <div className='box__container'>
          {this.state.board.map((arr,i) => {
            return arr.map((ele,j) => {
              return <Box value={ele} key={`${i}-${j}`} id={`${i}-${j}`} updateBoard={this.updateBoard}/>
            })
          })}
        </div>
      </div>
    )
  }
}

export default Board;
