import React from 'react'
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles'

const styles = {
    root: {
        height: '100vh',
        backgroundColor: "#ccc"
    }
}

const DashBoard = ({children, classes}) =>
    <Grid alignItems="center" justify="center" container className={classes.root}>
        {children}
    </Grid>


export default withStyles(styles)(DashBoard)