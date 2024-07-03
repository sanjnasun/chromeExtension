import React, {ReactNode} from "react";
import { Box } from "@mui/material";

interface JSXElement
{
    children: ReactNode;
}



const ExContain = ({ children }: JSXElement) => {
    return (
        <Box
        height={270}
        width={415}
        display="flex"
        alignItems="center"
        p={2}
        sx={{ border: '2px solid grey' }}
      >
        {children}
      </Box>       
      );
}

export default ExContain;
