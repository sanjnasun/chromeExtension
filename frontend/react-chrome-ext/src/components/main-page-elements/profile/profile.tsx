import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { UserValues } from '../../../models/apimodel';
import userData from '../../../models/users.json';

const userVal: UserValues = userData as UserValues;
//new chnages
const Profile = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
        >
            <Typography sx={{ textAlign: 'center', fontFamily: 'Libre Baskerville', margin: 'auto'}} variant="h5" component="h5">
            Profile
            </Typography>

            <Typography sx={{marginLeft: "10px"}} variant="subtitle1" gutterBottom>
                {userVal.userName_first} {userVal.userName_last}
            </Typography>

            <Typography sx={{marginLeft: "10px"}} variant="body1" gutterBottom>
                {userVal.user_email}
            </Typography>
        </Box>
    );
};

export default Profile;




