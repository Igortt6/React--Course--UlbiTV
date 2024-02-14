import React from 'react'
import classes from './MainInput.module.scss'

const MainInput = props => {
	return <input {...props} className={classes.input} />
}

export default MainInput
