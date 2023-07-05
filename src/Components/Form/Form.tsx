import React from 'react';
import {Button, FormControl, NativeSelect, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {IMenuItem} from "../../type";

interface Props {
    menuList: string[];
    selectChange: React.ChangeEventHandler<HTMLSelectElement>;
    selectValue: string;
    inputValue: IMenuItem;
    inputChange: React.ChangeEventHandler<HTMLInputElement>;
    sendButton: React.MouseEventHandler<HTMLButtonElement>;
}

const Form: React.FC<Props> = (props) => {
    return (
        <>
            <FormControl fullWidth>
                <NativeSelect
                    onChange={props.selectChange}
                >
                    <option selected style={{display: 'none'}} value="DefoulOption">Выберите пункт</option>
                    {props.menuList.map(item => {
                        return <option key={item + 1} value={item}>{item}</option>
                    })}
                    <option value="Добавить новую страницу">Добавить новую страницу</option>
                </NativeSelect>

                <TextField
                    required
                    type="text"
                    variant="filled"
                    name="title"
                    value={props.inputValue.title}
                    onChange={props.inputChange}
                />

                <TextField
                    required
                    type="text"
                    variant="filled"
                    name="content"
                    value={props.inputValue.content}
                    onChange={props.inputChange}
                />

                <Button
                    variant="contained"
                    onClick={props.sendButton}
                    endIcon={<SendIcon/>}>
                    Send
                </Button>
            </FormControl>
        </>
    );
};

export default Form;