import NotifBox from './notifBox';
import data from '../../../models/data.json';
import { ArticleValues } from "../../../models/apimodel";
import { Typography } from '@mui/material';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';

const Notifications = () => {

    
    const notif:ArticleValues[] = data;
    const openNewTab = () => {
        // Open a new tab with the URL of the newTab component
        window.open('/new-tab', '_blank');
    };

    return (
        <div> 
            <Typography align="center" sx={{ textAlign: 'center', fontFamily: 'Libre Baskerville'}} variant="body1" gutterBottom>

            Notifications 
            </Typography>
            {notif.map((item) => (
                <NotifBox
                    article = {item}
                />
            ))}

        <Box textAlign='center'>
            <Button variant="contained" size="small" className='buttonDown' onClick={openNewTab}>
                View
            </Button>
        </Box>

        </div>
        
        
    );
};

export default Notifications;
