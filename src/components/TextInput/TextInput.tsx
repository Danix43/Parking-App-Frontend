import React from 'react'
import styled from 'styled-components';

const BaseContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    text-align: center;

    padding-bottom: 0;
    margin-bottom: .2rem;
`;

const Input = styled.input`
    font-size: 2vh;
    
    border-radius: 30px;
    background-color: #171717;

    text-align: center;
    color: white;
`;

type TextInputTypes = {
    title: string,
    type?: string,
    placeHolder: string,
}

function TextInput({ title, type, placeHolder }: TextInputTypes) {
    return (
        <BaseContainer>
            <Label htmlFor={`input${title}`}>
                {title}
            </Label>
            <Input type={type || "text"} name={`input${title}`} placeholder={placeHolder}>
            </Input>
        </BaseContainer>
    );
}

export default TextInput;