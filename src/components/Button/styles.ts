import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  white?: boolean;
  margin?: number;
}

type Textprops = ContainerProps;

export const Container = styled.View<ContainerProps>`
  border-radius: 10px;
  margin-bottom: 10px;

  background: #000;

  ${props =>
    props.white &&
    css`
      border: 4px;
      border-color: #000;
      background: #fff;
    `};

  width: 100%;
  height: 60px;

  justify-content: center;
  align-items: center;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<Textprops>`
  font-size: 20px;
  color: #fff;
  text-align: center;

  ${props =>
    props.white &&
    css`
      color: #000;
    `}; /* text-transform: uppercase; */
`;
