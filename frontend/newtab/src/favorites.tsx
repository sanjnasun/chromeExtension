import { Box, Typography, Grid } from '@mui/material';

const Favorites = () => {
  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      {/* Grid item for Favorite Categories on the left */}
      <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '60px' }}>
        <Box 
          sx={{ 
            backgroundColor: 'white', 
            padding: '70px', 
            width: '100px',
            height: '130px' 
          }}
        >
          <Typography 
            align="center" 
            sx={{ 
              fontFamily: 'Libre Baskerville', 
              fontSize: '20px', 
              color: 'black',
              marginTop: '-40px',
              fontWeight: "bold"
            }}
            variant="body1"
          >
            Favorite Categories
          </Typography> 
          <Typography 
            align="left" 
            sx={{ 
              fontFamily: 'Arial', 
              fontSize: '20px', 
              color: 'black',
              marginTop: '10px'
            }}
          >
        Entertainment
        Sports 
        USC
        Politics

            
          </Typography> 
        </Box>
      </Grid>

      {/* Grid item for other content on the right */}
      <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Placeholder for other content */}
      
      </Grid>
    </Grid>
  );
};

export default Favorites;
