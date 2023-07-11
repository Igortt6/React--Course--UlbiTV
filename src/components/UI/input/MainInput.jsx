import React from 'react';

import classes from './MainInput.module.css'

const MainInput = React.forwardRef((props, ref) => {

    return (
        <input {...props} ref={ref} className={classes.input} />
    )
});

export default MainInput;