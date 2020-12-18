import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
    renderSquare(value){
        return <Square value={this.props.squares[value]}
        onClick={()=>this.props.onClick(value)}
        />
    }
    render() {
        return (
            <div>
                <div className="boardRow">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="boardRow">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="boardRow">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                
            </div>
        )
    }
}
