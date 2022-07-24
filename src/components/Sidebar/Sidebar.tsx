import React, { useContext } from "react";
import Button from "../Button/Button";
import "./Sidebar.css";
import { ReactComponent as Logo } from '../../icons/parking_icon.svg';
import styled, { ThemeContext } from "styled-components";

const SidebarRoot = styled.div`
    /* sidebar positioning */
    height: 100%;
    width: 20%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;

    /* inside side */
    display: flex;
    flex-direction: column;

    padding: 1rem;

    background-color: ${props => props.theme.sidebarColor};
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`;

function Sidebar() {
  const themeContext = useContext(ThemeContext);

  return (
    <SidebarRoot theme={themeContext}>
      {/* logo */}
      <LogoContainer>
        <Logo />
        <h1 className="app-name">Find a Spot!</h1>
      </LogoContainer>

      <Button text="Add a new spot" link="test"></Button>
      <Button text="See all the spots" link="test"></Button>
      <Button text="See all the used spots" link="test"></Button>
    </SidebarRoot>
  );
}

export default Sidebar;
