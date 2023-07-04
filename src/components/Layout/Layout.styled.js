import { NavLink } from 'react-router-dom';
import { AppBar } from '@mui/material';
import { styled as styledMui } from '@mui/system';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
`;

export const Header = styledMui(AppBar)`
  position: static;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid black;
  margin-bottom: 40px;
  background: linear-gradient(90deg, rgb(97, 204, 236), rgb(25, 118, 210) 50%, rgb(97, 204, 236) 100%);
 `;

export const SiteNav = styled.nav`
  margin-left: 5px;
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  padding: 10px;
  color: black;
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 5px;
  &.active {
    color: yellow;
  }
  &:hover,
  &:focus {
transform: scale(1.1); 
  }
`;