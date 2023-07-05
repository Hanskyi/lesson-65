import React, {useCallback, useEffect, useState} from 'react';
import {Container, Typography} from "@mui/material";
import axiosApi from "../../axiosApi";
import {useParams} from "react-router-dom";
import {IMenuItem} from "../../type";
import Preloader from "../../Components/Preloader/Preloader";

const Content = () => {

    const [content, setContent] = useState<IMenuItem | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const {id} = useParams();

    const fetchResponse = useCallback(async () => {
        setOpen(true)
        try {
            const response = await axiosApi<IMenuItem>(`/${id}.json`);
            setContent(response.data);
            console.log(response.data);
        } finally {
            setOpen(false);
        }

    }, [id]);

    useEffect(() => {
        void fetchResponse();
    }, [fetchResponse]);

    return (
        <Container maxWidth="lg" sx={{marginTop: "100px", textAlign:"center", display:'flex', flexDirection: "column",alignItems:"center"}}>
            {id !== "Admin" ?
                <>
                     <Typography variant="h3" sx={{marginBottom: "20px"}}>{content && content.title}</Typography>
                     <Typography variant="body1" sx={{maxWidth: "400px"}}> {content && content.content}</Typography>
                </>
                : null}
            {open ? <Preloader/> : null}
        </Container>
    );
};

export default Content;