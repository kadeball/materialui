import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';



function Checkboxed() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <div>
            <Checkbox
                checked={state.checkedA}
                onChange={handleChange('checkedA')}
                value="checkedA"
                inputProps={{
                    'aria-label': 'primary checkbox',
                }}
            />
            <Checkbox
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                color="primary"
                inputProps={{
                    'aria-label': 'secondary checkbox',
                }}
            />
            <FormControlLabel
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
                label="Custom icon"
            />
        </div>
    );
}

export default Checkboxed;