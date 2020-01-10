import React from 'react'
import {connect} from 'react-redux'

import Board from '../components/Board'
import Card from '../components/Card';
import {selectCard} from '../store/actions'

const GamePage = ({cards, handlerCard}) => (
    <Board>
    {cards.map(card=>(
        <Card flipped={card.flipped} name={card.name} onClick={() => handlerCard(card.key)}>

        </Card>
    ))
    }
    </Board>    
);




const mapStateToProps = (state) => ({
    cards: state.cards
})

const mapDispatchToProps = { handlerCard: selectCard }

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
