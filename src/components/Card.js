import React from 'react';
import MCard from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent' 
import Typo from '@material-ui/core/Typography' 
import {withStyles} from '@material-ui/core/styles'
import classNames from 'classnames'

const width = '160px'
const height = '200px'

const styles={
    root:{
        width,
        height,
        margin: '120px',
        cursor: 'pointer'
    },
    flipper:{
        transition: '0.6s',
        transformStyle: 'preserve-3d',
        position: 'relative'
    },
    flipperRotate: {
        transform: 'rotateY(180deg)'
    },
    page:{
        width,
        height,
        position: 'absolute',
        top: 0,
        left: 0,
        backfaceVisibility: 'hidden',
    },
    pageFront:{
        backgroundColor: 'silver',
        transform: 'rotateY(0deg)',
        zIndex:2
    },
    pageBack:{
        backgroundColor: 'tomato',
        transform: 'rotateY(180deg)',

    }
}


const Card = ({name, classes, flipped, onClick}) => (
    <div className={classes.root} onClick={onClick}>
        <div className={classNames(classes.flipper, {[classes.flipperRotate]: flipped})}>
            <MCard className={classNames(classes.page, classes.pageFront)}></MCard>
            <MCard className={classNames(classes.page, classes.pageBack)}>
                <CardContent>
                    <Typo variant='h5' component='h2'>
                        {name}
                    </Typo>
                </CardContent>
            </MCard>
        </div>
    </div>
)


export default withStyles(styles)(Card);