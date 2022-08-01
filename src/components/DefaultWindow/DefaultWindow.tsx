import React from 'react'
import styled from 'styled-components'

const BaseContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`;

const MainHeading = styled.h1`
    font-size: 3rem;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    border-top: 3px solid white; 
    margin: 0;
    `;

function DefaultWindow() {
    return (
        <BaseContainer>
            <MainHeading>The dashboard for the admins of the parking app!</MainHeading>

            <ContentContainer>
                <h2>See all the spots - displays a map with all the parking spots registered</h2>
                <h2>See all the used spots - displays a map with all the parking spots registered that are currently in use</h2>
                <h2>See the status of a spot - shows informations of a parking spot such as usage, user and location on the map</h2>
                <h2>Add a new spot - let's you pinpoint on a map a location and register a new spot</h2>
                <h2>Delete an existing spot - delete a spot based on location or other information</h2>
            </ContentContainer>
        </BaseContainer>
    );
}

export default DefaultWindow;