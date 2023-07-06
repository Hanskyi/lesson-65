import React, {useCallback, useEffect, useState} from 'react';
import {Container} from "@mui/material";
import Form from "../../Components/Form/Form";
import axiosApi from "../../axiosApi";
import {IMenuItem, IMenuUpdate} from "../../type";
import {useNavigate} from "react-router-dom";
import Preloader from "../../Components/Preloader/Preloader";

const AddEdit = () => {
    const [menuList, setMenuList] = useState<string[]>([]);
    const [selectValue, setSelectValue] = useState<string>('');
    const [inputValue, setInputValue] = useState<IMenuItem>({
        title: '',
        content: '',
    });
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const fetchResponse = useCallback(async () => {

        setOpen(true);
        try {
            const response = await axiosApi.get<IMenuUpdate>('.json');
            const responseCopy = Object.keys(response.data);
            setMenuList(responseCopy);

            if (selectValue) {
                const newResponse = await axiosApi.get<IMenuItem>(`/${selectValue}.json`);
                setInputValue(newResponse.data)
            }

        } finally {
            setOpen(false);
        }
    }, [selectValue]);

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectValue(value);
    };

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInputValue(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const sendButton = async () => {
        setOpen(true);
        try {
            await axiosApi.put(`/${selectValue}.json`, inputValue).then(() => navigate(`/pages/${selectValue.toLowerCase()}`));
        } finally {
            setOpen(false);
        }
    };

    useEffect(() => {
        void fetchResponse();
    }, [fetchResponse]);

    return (
        <Container maxWidth="lg" sx={{marginTop: "100px",display: "flex", justifyContent:"center"}}>
            <Form
                menuList={menuList}
                selectChange={selectChange}
                selectValue={selectValue}
                inputValue={inputValue}
                inputChange={inputChange}
                sendButton={sendButton}
            />
            {open ? <Preloader/> : null}
        </Container>
    );
};

export default AddEdit;