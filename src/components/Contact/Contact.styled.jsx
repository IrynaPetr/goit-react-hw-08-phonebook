import styled from 'styled-components';

export const Item = styled.li`
margin-left: 30px;
font-size: 18px;
font-weight: 600;
padding: 10px;
margin-bottom: 15px;
&:hover,
&:focus {
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
}
`;

export const ItemContainer = styled.div`
display: flex;
width: 800px;
    justify-content: space-between;
    margin: auto;
    font-size: 24px;
    font-weight: 500;



`;

export const Button = styled.button`
margin-left: 30px;
height: 30px;
width: 70px;
cursor: pointer;
font-size: 16px;
border-radius: 5px;
background-color: #ff7953;
box-shadow: 4px 4px #7d947d;
`;