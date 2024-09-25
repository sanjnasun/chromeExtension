import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { ArticleValues } from "./models/apimodel";
import { Box, Typography, Grid } from '@mui/material';

const NewsCards: React.FC<{ article: ArticleValues }> = ({ article }) => {
  const { media_name, media_img } = article;

  return (
    <Grid container sx={{ minHeight: '0vh' }}>
      {/* Grid item for Favorite Categories on the left */}
      <Grid
        item
        xs={4}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '600px',
          marginTop: '-1100px'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            width: '200px',
            height: '100px',
          }}
        >
          <Card sx={{ display: 'flex' }} className="cardVal">
            <CardMedia
              component="img"
              sx={{
                marginTop: '30px',
                width: 200,
                height: 50, // Maintain aspect ratio
                display: 'block', // Ensure it is displayed
              }}
              // image={spiderman}
              // alt="Spiderman"
            />
            <Box
              textAlign="center"
              sx={{ display: 'flex', flexDirection: 'column' }}
              className="innerbox"
            >
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography align="center" variant="subtitle2">
                  {media_name}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Box>
      </Grid>

      {/* Grid item for other content on the right */}
      <Grid
        item
        xs={8}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Placeholder for other content */}
      </Grid>
    </Grid>
  );
};

export default NewsCards;
