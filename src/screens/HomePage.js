import React from 'react'
import DashBoard from '../components/DashBoard'
import Menu from '../components/Menu'
import Button from '../components/ButtonDash'

const HomePage = () => (

    <DashBoard>
        <Menu title="Jogo da memoria">
            <Button to='/game'>
                comecar
            </Button>
        </Menu>
    </DashBoard>
);

export default HomePage;