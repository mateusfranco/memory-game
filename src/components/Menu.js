import React from 'react'
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 6
    },
    title:{
        padding: theme.spacing.unit * 2
    }
})

const Menu = ({children, classes, title}) => (
    <Paper className={classes.root}>
        <Typography className={classes.title} variant='h4' align="center">
            {title}
        </Typography>
        {children}
    </Paper>
)

export default withStyles(styles)(Menu);