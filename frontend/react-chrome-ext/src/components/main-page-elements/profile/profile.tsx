import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { UserValues } from '../../../models/apimodel';
import userData from '../../../models/users.json';

const userVal: UserValues = userData as UserValues;

const Profile = () => {
    return (
        <Box
            // display="flex"
            // flexDirection="column"
            // alignItems="center"
            // justifyContent="center"
            // textAlign="center"
        >
            <Typography sx={{ textAlign: 'center', fontFamily: 'Libre Baskerville', marginTop:"-75px", marginLeft:"100px",}} variant="h5" component="h5">
                Profile 
            </Typography>
            <Typography sx={{fontFamily: 'Arial', fontSize: 25, marginTop:"20px", marginLeft:"15px"}} variant="h5" component="h5">
                {userVal.userName_first} {userVal.userName_last}    
            </Typography>

            <Typography sx={{fontFamily: 'Arial', fontSize: 20, marginTop:"10px", marginLeft:"15px"}} variant="h5" component="h5">
                {userVal.user_email}
            </Typography>
        </Box>
    );
};

export default Profile;