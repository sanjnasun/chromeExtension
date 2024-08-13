import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Profile = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <Typography sx={{ textAlign: 'center' }} variant="h1" component="h5">
                Profile
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                First name, Last Name
            </Typography>

            <Typography variant="body1" gutterBottom>
                Email
            </Typography>

            <div>
                <Typography variant="subtitle1" gutterBottom>
                    Language
                </Typography>

                <FormControl fullWidth>
                    <InputLabel id="language-select-label">Language</InputLabel>
                    <Select
                        labelId="language-select-label"
                        id="language-select"
                        value={age}
                        label="Language"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>English</MenuItem>
                        <MenuItem value={20}>Spanish</MenuItem>
                        <MenuItem value={30}>French</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

export default Profile;
