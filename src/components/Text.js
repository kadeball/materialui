import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

function Text() {
    const classes = useStyles();
    const [name, setName] = React.useState('Name');
    const handleChange = event => {
        setName(event.target.value);
    };

    return (
        <form className={classes.container}>
            <div>
                <TextField
                    value={name}
                    label="Name"
                    validations={["required","min:1"]}
                    onChange={handleChange}
                    defaultValue="Name"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    value={name}
                    onChange={handleChange}
                    validations={["required","min:10"]}
                    id="num"
                    label="Number"
                    type="Number"
                    defaultValue="Number"
                    helperText="Enter a number greater than 10"
                    className={classes.textField}
                    margin="normal"
                />
            </div>
        </form>
    );
}

export default Text;