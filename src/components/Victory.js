import  React from 'react'
import Dialog from  '@material-ui/core/Dialog';
import DialogTitle from  '@material-ui/core/DialogTitle';
import DialogActions from  '@material-ui/core/DialogActions';
import DialogContent from  '@material-ui/core/DialogContent';
import DialogContentText from  '@material-ui/core/DialogContentText';
import Button from  '@material-ui/core/Button';

const Victory = ({open, close, gameRestart}) => (
    <Dialog open={open} close={close}>
        <DialogTitle> parabens ! </DialogTitle>
        <DialogContent>
            <DialogContentText>
                voce venceu... voce é de mais 
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button color='primary' onClick={gameRestart}>
                reiniciar
            </Button>
            <Button color='primary' onClick={close} autoFocus>    
                ok!!!
            </Button>
        </DialogActions>
    </Dialog>
);

export default Victory;