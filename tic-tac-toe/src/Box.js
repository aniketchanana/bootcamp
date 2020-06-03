import React from 'react';
import './Box.css';
class Box extends React.Component {
    constructor() {
        super();
        this.handelClick = this.handelClick.bind(this);
    }
    handelClick() {
        const [row,col] = this.props.id.split('-');
        this.props.updateBoard(row,col);
    }
    render() {
        return (
        <div onClick={this.handelClick} className='box'>{this.props.value}</div>
        )
    }
}

export default Box;