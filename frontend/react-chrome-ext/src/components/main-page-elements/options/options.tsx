import React, {useState} from 'react';
import { Checkbox, FormControlLabel, FormControl, FormGroup} from '@mui/material';
import { Typography } from '@mui/material';
const Options = () => {
    //a hook to create piece of state in the component 
    const[options, setOptions] = useState<string[]>([])
    
    console.log({options})
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const index = options.indexOf(event.target.value)
      if(index === -1) {
        setOptions([...options,event.target.value])
      } else {
        setOptions(options.filter((option) => option !== event.target.value))
      }
    }

    return (
        <div>
           <Typography sx={{ textAlign: 'center', fontFamily: 'Libre Baskerville', marginTop:"0px"}} variant="h5" component="h5">
                Options 
            </Typography>
            <Typography sx={{fontFamily: 'Arial', fontSize: 15, marginTop:"10px", marginLeft:"7px"}} variant="h5" component="h5">
                Select your Preferred News Topics
            </Typography>

            <FormControl>
            <FormGroup 
                sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    marginLeft:2,
                    gap: 1  // Adjust gap between items if needed
                }} 
            >
                <FormControlLabel
                    label="Sports"
                    control={<Checkbox color='secondary' value='sports' checked={options.includes('sports')} onChange={handleOptionChange} />} 
                />
                <FormControlLabel
                    label="Entertainment"
                    value='entertainment'
                    control={<Checkbox color='secondary' checked={options.includes('entertainment')} onChange={handleOptionChange} />} 
                />
                <FormControlLabel
                    label="USC"
                    value='usc'
                    control={<Checkbox color='secondary' checked={options.includes('usc')} onChange={handleOptionChange} />}   
                />
                <FormControlLabel
                    label="Politics"
                    value='politics'
                    control={<Checkbox color='secondary' checked={options.includes('politics')} onChange={handleOptionChange} />}   
                />
                <FormControlLabel
                    label="Technology/Science"
                    value='technology/science'
                    control={<Checkbox color='secondary' checked={options.includes('stock')} onChange={handleOptionChange} />}   
                />
            </FormGroup>
        </FormControl>
    </div>
);
};

export default Options;