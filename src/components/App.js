import React from 'react'
import Routes from '../Routes'

import { BrowserRouter as Router } from 'react-router-dom'
import  CssBaseline  from '@material-ui/core/CssBaseline'

const App = () => (
    <>
    <CssBaseline></CssBaseline>
    <Router>
        <Routes />
    </Router>
    </>
)
export { App }
