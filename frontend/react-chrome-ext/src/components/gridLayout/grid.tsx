import React, {ReactNode} from "react";
import { Box } from "@mui/material";

interface JSXElement
{
    children: ReactNode;
}



const ExContain = ({ children }: JSXElement) => {
    return (
        <Box
        height={230}
        width={415}
        display="flex"
        alignItems="center"
        sx={{ border: '2px solid grey' }}
      >
        {children}
      </Box>       
      );
}

export default ExContain;
