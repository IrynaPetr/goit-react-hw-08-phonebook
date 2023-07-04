import { styled as styledMui } from '@mui/system';
import styled from 'styled-components';
import { Button as ButtonMUI, TextField } from '@mui/material';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  max-width: 480px;
  margin: auto;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Input = styledMui(TextField)``;

export const Button = styledMui(ButtonMUI)`
  padding: 0;
  margin-top: 15px;
  height: 38px;
  max-width: 125px;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  border: 1px solid white;
  border-radius: 4px;
  color: black;
  &:hover {
    background-color: skyblue;
  }
`;