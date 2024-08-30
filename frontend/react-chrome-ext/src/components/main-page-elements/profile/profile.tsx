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
            <Typography variant="h5" gutterBottom>
                Profile
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                {userVal.userName_first} {userVal.userName_last}
            </Typography>

            <Typography variant="body1" gutterBottom>
                {userVal.user_email}
            </Typography>
        </Box>
    );
};

export default Profile;
