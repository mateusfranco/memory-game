import React, { Component } from 'react'

import Board from '../components/Board'
import Card from '../components/Card';



class GamePage extends Component {
    state = { flipped: false }

    handlerCard = () => {
        this.setState({flipped : !this.state.flipped})
    }

    render() {

        return (            
            <Board>
                <Card flipped={this.state.flipped} name="cartao de teste" onClick={this.handlerCard}>

                </Card>
            </Board>
        );
    }
}

export default GamePage;
