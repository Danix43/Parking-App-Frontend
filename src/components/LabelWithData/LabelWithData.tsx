import React from 'react'
import styled from 'styled-components';

const BaseContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.h2`
    text-align: center;

    padding-bottom: 0;
    margin-bottom: .2rem;
`;

const Data = styled.p`
    font-size: 2vh;
    
    border-radius: 30px;
    background-color: #171717;

    text-align: center;
    `;

type LabelWithDataProps = {
    labelTitle: string,
    dataContent: string,
}

function LabelWithData({ labelTitle, dataContent }: LabelWithDataProps) {
    return (
        <BaseContainer>
            <Label>
                {labelTitle}
            </Label>
            <Data>
                {dataContent}
            </Data>
        </BaseContainer>
    )
}

export default LabelWithData;