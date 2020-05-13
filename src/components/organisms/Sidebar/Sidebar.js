import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import bulbIcon from 'assets/icons/bulb.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoutIcon from 'assets/icons/logout.svg';
import logoIcon from 'assets/icons/logo.svg';

import ButtonIcon from 'Components/atoms/ButtonIcon/ButtonIcon';

// ButtonIcon ma być Linkiem - w React robimy to przez as={komponent}

const StyledSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100vh;
  width: 150px;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.note};

  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
`;

const StyledList = styled.ul`
  list-style: none;

  padding: 0;
  margin: 0;
`;

const StyledLogo = styled.div`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
  cursor: pointer;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageType }) => (
  <StyledSidebar activeColor={pageType}>
    <StyledLogo to="/" />
    <StyledList>
      <li>
        <ButtonIcon
          as={NavLink}
          to="/notes"
          icon={penIcon}
          activeclass="active"
        />
      </li>
      <li>
        <ButtonIcon
          as={NavLink}
          to="/twitters"
          icon={twitterIcon}
          activeclass="active"
        />
      </li>
      <li>
        <ButtonIcon
          as={NavLink}
          to="/articles"
          icon={bulbIcon}
          activeclass="active"
        />
      </li>
    </StyledList>
    <StyledLogoutButton
      as={NavLink}
      to="/login"
      icon={logoutIcon}
      activeclass="active"
    />
  </StyledSidebar>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageType: 'notes',
};

export default Sidebar;
