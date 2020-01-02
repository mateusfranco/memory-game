import React from 'react'
import { Switch, Route} from 'react-router-dom'
import HomePage from './screens/HomePage'
import GamePage from './screens/GamePage'

const Routes = () => (
    <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/game" component={GamePage}/>
    </Switch>
)

export default Routes