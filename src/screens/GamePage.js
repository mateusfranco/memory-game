import React from 'react'

import Board from '../components/Board'
import Card from '../components/Card';

import {connect} from 'react-redux'

const GamePage = ({cards, handlerCard}) => (
    <Board>
    {cards.map(card=>(
        <Card flipped={card.flipped} name={card.name} onClick={() => handlerCard(card)}>

        </Card>
    ))
    }
    </Board>    
);




const mapStateToProps = (state) => ({
    cards: state.cards
})

const mapDispatchToProps = dispatch => ({
    handlerCard: card => {
        dispatch({type: 'select_card', key: card.key})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
