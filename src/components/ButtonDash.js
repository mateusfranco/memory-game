import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const ButtonDash = ({children,to}) => (
    <Button component={Link} to={to} size='large' fullWidth color='primary'>{children}</Button>

)

export default ButtonDash;