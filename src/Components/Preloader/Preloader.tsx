import React from 'react';
import {Backdrop, CircularProgress} from "@mui/material";

interface Props {
    open?: boolean
}
const Preloader:React.FC<Props> = ({open}) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default Preloader;