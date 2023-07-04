import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Name = styled.p`
  padding: 5px 0;
  color: black;
  font-size: 19px;
  font-weight: 600;
  text-decoration: none;
`;

export const Button = styled.button`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  max-width: 140px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  background-color: #63ff53;
  
  &:hover,
  &:focus {
    background-color: #42d93d;
    transform: scale(1.1); 
  }
`;
