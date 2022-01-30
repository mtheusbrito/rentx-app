import React from 'react';

import { Container, Title } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  // onPress:() => void;
}
export function Button({title, color,...rest}:Props){
return (
 <Container {...rest} color={color}>
   <Title>{title}</Title>

</Container>
 );
}