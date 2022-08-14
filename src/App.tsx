import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Button from './components/Button/Button';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles } from './theming/global';
import { darkTheme, lightTheme } from './theming/theme';

import { ReactComponent as Logo } from './theming/icons/parking_icon.svg';

// button logos
import { ReactComponent as ListLogo } from './theming/icons/all_spots_icon.svg';
import { ReactComponent as AltListLogo } from './theming/icons/used_spots_icon.svg';
import { ReactComponent as SearchSpotLogo } from './theming/icons/search_a_spot_icon.svg';
import { ReactComponent as AddSpotLogo } from './theming/icons/add_spot_icon.svg';
import { ReactComponent as DeleteSpotLogo } from './theming/icons/delete_spot_icon.svg';

import DefaultWindow from 'pages/DefaultWindow/DefaultWindow';
import SeeUsedSpotsWindow from 'pages/SeeUsedSpotsWindow/SeeUsedSpotsWindow';
import SeeAllSpotsWindow from 'pages/SeeAllSpotsWindow/SeeAllSpotsWindow';
import SeeSpotStatusWindow from 'pages/SeeSpotStatusWindow/SeeSpotStatusWindow';
import AddNewSpotWindow from 'pages/AddNewSpotWindow/AddNewSpotWindow';
import DeleteSpotWindow from 'pages/DeleteSpotWindow/DeleteSpotWindow';


const SidebarRoot = styled.div`
    // /* sidebar positioning */
    height: 100%;
    width: 15%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;

    /* inside side */
    display: flex;
    flex-direction: column;

    padding: 1rem;
    border-top: 1px solid #455572;
    border-right: 1px solid #455572;

    background-color: ${props => props.theme.elevation1Color};
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    border-bottom: 1px solid #455572;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 2rem;

    align-items: left;
`;

const ContentContainer = styled.div`
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left: 17%;
    margin-right: 2%;

    border-radius: 15px;
    background-color: ${props => props.theme.elevation1Color};
`;


function App() {
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const [currentContentWindow, setCurrentContentWindow] = useState(<DefaultWindow />);

    const switchCurrentContentWindow = (word = "default") => {
        switch (word) {
            case "seeAllSpots": {
                setCurrentContentWindow(<SeeAllSpotsWindow />);
                break;
            }
            case "seeAllOcupiedSpots": {
                setCurrentContentWindow(<SeeUsedSpotsWindow />);
                break;
            }
            case "seeStatusSpot": {
                setCurrentContentWindow(<SeeSpotStatusWindow />);
                break;
            }
            case "newSpot": {
                setCurrentContentWindow(<AddNewSpotWindow />);
                break;
            }
            case "deleteSpot": {
                setCurrentContentWindow(<DeleteSpotWindow />);
                break;
            }
            case "default": {
                setCurrentContentWindow(<DefaultWindow />);
                break;
            }
        }
    };

    if (!componentMounted) {
        return <div />
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <SidebarRoot theme={themeMode}>
                <LogoContainer>
                    <Logo color={themeMode.logoColor} />
                    <h1 className="app-name">Find a Spot!</h1>
                </LogoContainer>

                <ButtonContainer>
                    <Button text="Start menu" onClick={() => switchCurrentContentWindow("default")} img={<ListLogo color="white" height="48" width="40" />}></Button>
                    <Button text="See all the spots" onClick={() => switchCurrentContentWindow("seeAllSpots")} img={<ListLogo color="white" height="48" width="40" />}></Button>
                    <Button text="See all the used spots" onClick={() => switchCurrentContentWindow("seeAllOcupiedSpots")} img={<AltListLogo color="white" height="48" width="40" />}></Button>
                    <Button text="See the status of a spot" onClick={() => switchCurrentContentWindow("seeStatusSpot")} img={<SearchSpotLogo color="white" height="48" width="40" />}></Button>
                    <Button text="Add a new spot" onClick={() => switchCurrentContentWindow("newSpot")} img={<AddSpotLogo color="white" height="48" width="40" />}></Button>
                    <Button text="Delete an existing spot" onClick={() => switchCurrentContentWindow("deleteSpot")} img={<DeleteSpotLogo color="white" height="48" width="40" />}></Button>
                </ButtonContainer>
            </SidebarRoot >
            <ContentContainer theme={themeMode}>
                {currentContentWindow}
            </ContentContainer>
        </ThemeProvider>
    );
}

export default App;