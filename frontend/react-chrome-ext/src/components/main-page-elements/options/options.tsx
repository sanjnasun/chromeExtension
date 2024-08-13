import React, {useState} from 'react';
import { Box, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup} from '@mui/material';

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
        <h5>Options</h5>
        <FormControl>
                <FormLabel>News Preferences</FormLabel>
                <FormGroup row>
                    <FormControlLabel
                        label="Sports"
                        control={<Checkbox color = 'secondary' value='sports' checked={options.includes('sports')} onChange={handleOptionChange} />} 
                    />
                <FormControlLabel
                    label="Entertainment"
                    value = 'entertainment'
                    control={<Checkbox color = 'secondary' checked={options.includes('entertainment')} onChange={handleOptionChange} />} 
                    />
                <FormControlLabel
                    label="USC"
                    value = 'usc'
                    control={<Checkbox color = 'secondary' checked={options.includes('usc')} onChange={handleOptionChange} />}   
                    />
                 <FormControlLabel
                    label="Politics"
                    value = 'politics'
                    control={<Checkbox color = 'secondary' checked={options.includes('politics')} onChange={handleOptionChange} />}   
                    />
                 <FormControlLabel
                    label="Stock"
                    value = 'stock'
                    control={<Checkbox color = 'secondary' checked={options.includes('stock')} onChange={handleOptionChange} />}   
                    />

                </FormGroup>
        </FormControl>
    </div>

    );
};

export default Options;
