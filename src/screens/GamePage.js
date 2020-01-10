import React from 'react'
import {connect} from 'react-redux'

import Board from '../components/Board'
import Card from '../components/Card';
import Victory from '../components/Victory'
import {selectCard, closeVictory, startGame} from '../store/actions'



const GamePage = ({cards, handlerCard, victory, closeVictory, startGame}) => (
    <>
    <Board>
    {cards.map(card=>(
        <Card flipped={card.flipped} name={card.name} onClick={() => handlerCard(card.key)}>

        </Card>
    ))
    }
    </Board>
    <Victory open={victory} close={closeVictory} gameRestart={startGame} />
    </>    
);




const mapStateToProps = (state) => ({
    cards: state.cards,
    victory: state.victoryDialogOpen
})

const mapDispatchToProps = { handlerCard: selectCard, closeVictory:closeVictory, startGame:startGame }

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
