import React, { useContext } from "react";
import Button from "../Button/Button";
import "./Sidebar.css";
import { ReactComponent as Logo } from '../../theming/icons/parking_icon.svg';
import styled, { ThemeContext } from "styled-components";

// button logos
import { ReactComponent as ListLogo } from '../../theming/icons/all_spots_icon.svg';
import { ReactComponent as AltListLogo } from '../../theming/icons/used_spots_icon.svg';
import { ReactComponent as SearchSpotLogo } from '../../theming/icons/search_a_spot_icon.svg';
import { ReactComponent as AddSpotLogo } from '../../theming/icons/add_spot_icon.svg';
import { ReactComponent as DeleteSpotLogo } from '../../theming/icons/delete_spot_icon.svg';

const SidebarRoot = styled.div`
    /* sidebar positioning */
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

function openSeeAllSpotsDialog(word = "default") {
  console.log("now opening all spots dialog");
  console.log("word = " + word);
}

function Sidebar() {
  const themeContext = useContext(ThemeContext);
  return (
    <SidebarRoot theme={themeContext}>
      <LogoContainer>
        <Logo color={themeContext.logoColor} />
        <h1 className="app-name">Find a Spot!</h1>
      </LogoContainer>

      <ButtonContainer>
        <Button text="See all the spots" onClick={() => openSeeAllSpotsDialog("test")} img={<ListLogo color="white" height="48" width="40" />}></Button>
        <Button text="See all the used spots" onClick={openSeeAllSpotsDialog} img={<AltListLogo color="white" height="48" width="40" />}></Button>
        <Button text="See the status of a spot" onClick={openSeeAllSpotsDialog} img={<SearchSpotLogo color="white" height="48" width="40" />}></Button>
        <Button text="Add a new spot" onClick={openSeeAllSpotsDialog} img={<AddSpotLogo color="white" height="48" width="40" />}></Button>
        <Button text="Delete an existing spot" onClick={openSeeAllSpotsDialog} img={<DeleteSpotLogo color="white" height="48" width="40" />}></Button>
      </ButtonContainer>
    </SidebarRoot >
  );
}

export default Sidebar;
