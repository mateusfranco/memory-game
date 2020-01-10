import React from 'react'
import Routes from '../Routes'
import {Provider} from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'
import  CssBaseline  from '@material-ui/core/CssBaseline'
import store from '../store/index'

const App = () => (
    <Provider store={store}>
        <>
        <CssBaseline></CssBaseline>
        <Router>
            <Routes />
        </Router>
        </>
    </Provider>
)
export { App }
