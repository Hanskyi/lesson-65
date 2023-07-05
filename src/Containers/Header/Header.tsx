import React, {useCallback, useEffect, useState} from 'react';
import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {IMenuUpdate} from "../../type";
import Preloader from "../../Components/Preloader/Preloader";
import './header.css';


const Header = () => {

    const [menuName, setMenuName] = useState<string[]>([]);
    const [open, setOpen] = useState<boolean>(false);

    const getMenuList = useCallback(async () => {
        setOpen(true);
        try {
            const response = await axiosApi.get<IMenuUpdate>('.json');
            const responseT = Object.keys(response.data);
            responseT.push('Admin');
            setMenuName(responseT);
        } finally {
            setOpen(false);
        }

    }, [])

    useEffect(() => {
        void getMenuList()
    }, [getMenuList])


    return (
        <AppBar position="fixed">
            <Container maxWidth="lg" fixed>
                <Toolbar>
                    <Box sx={{mr: "auto"}}>
                        <Typography>Header</Typography>
                    </Box>
                    <Toolbar sx={{marginRight: "20px", gap: "20px"}}>
                        {menuName.map(item => {
                            return (
                                <Box key={item + 1}>
                                    <NavLink key={item + 12} to={`/${item}`} className="header-link">{item}</NavLink>
                                </Box>
                            )
                        })}
                        <Box>
                            <NavLink  to={`/Admin`} className="header-link">Admin</NavLink>
                        </Box>
                    </Toolbar>
                </Toolbar>
            </Container>
            {open ? <Preloader/> : null}
        </AppBar>
    );
};

export default Header;