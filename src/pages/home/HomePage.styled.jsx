import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
pading: 15px 60px;
display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const Text = styled.p`
font-size: 20px;
font-weight: 600;
display: flex;
justify-content: space-around;
padding: 50px 120px;
`;

export const StyledLink = styled(Link)`
  color: blue;
  text-decotation: none;
  padding: 5px 20px;
  color: black;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 5px;
  margin: 10px 60px;
  &:hover,
  &:focus {
transform: scale(1.1); 

  }
`;