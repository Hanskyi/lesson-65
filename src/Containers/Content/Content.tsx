import React, {useCallback, useEffect, useState} from 'react';
import {Box, Container, Typography} from "@mui/material";
import axiosApi from "../../axiosApi";
import {useParams} from "react-router-dom";
import {IMenuItem} from "../../type";
import Preloader from "../../Components/Preloader/Preloader";
import './content.css';

const Content = () => {

    const [content, setContent] = useState<IMenuItem | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const {id} = useParams();
    let idUpdate = '';
    if (id) {
        idUpdate = id.charAt(0).toUpperCase() + id.slice(1);
    }

    const fetchResponse = useCallback(async () => {
        setOpen(true)
        try {
            const response = await axiosApi<IMenuItem>(`/${idUpdate}.json`);
            setContent(response.data);
        } finally {
            setOpen(false);
        }

    }, [idUpdate]);

    useEffect(() => {
        void fetchResponse();
    }, [fetchResponse]);

    return (
        <Container maxWidth="lg">
            <Box className="content-container">
                {id !== "admin" ?
                    <>
                        <Typography variant="h3" sx={{marginBottom: "20px"}}>{content && content.title}</Typography>
                        <Typography variant="body1" sx={{maxWidth: "400px"}}> {content && content.content}</Typography>
                    </>
                    : null}
            </Box>
            {open ? <Preloader/> : null}
        </Container>
    );
};

export default Content;