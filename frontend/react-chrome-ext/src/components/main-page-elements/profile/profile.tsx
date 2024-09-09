import React from 'react';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { userValues } from '../../../models/apimodel';

const Profile = () => {
    const [language, setLanguage] = useState("");;

    const handleChange = (event) => {
        setLanguage(event.target.value);
      };

    return (
        <div>
            <Typography sx={{ textAlign: 'center', fontFamily: 'Libre Baskerville', marginTop: "-40px", marginLeft:"100px"}} variant="h5" component="h5">
                Profile
            </Typography>

            <Typography sx={{marginLeft: "10px"}} variant="subtitle1" gutterBottom>
                First name, Last Name
            </Typography>

            <Typography sx={{marginLeft: "10px"}} variant="body1" gutterBottom>
                Email
            </Typography>

            <div>

                <FormControl fullWidth sx={{marginLeft: "10px"}}>
                    <InputLabel id="language-select-label">Language</InputLabel>
                    <Select
                        value={language}
                        onChange={handleChange}
                        
                    >
                        <MenuItem value={1}>English</MenuItem>
                        <MenuItem value={2}>Spanish</MenuItem>
                        <MenuItem value={3}>Chinese</MenuItem>
                        
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

export default Profile;
