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
      turn: 0
    }
    this.updateBoard = this.updateBoard.bind(this);
  }
  updateBoard(row,col) {
    let gameBoard = this.state.board;
    if(gameBoard[row][col] !== '') {
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
    });
  }
  render() {
    return (
      <div className='board'>
        <h1>tic-tac-toe</h1>
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
