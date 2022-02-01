import React from 'react';


import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { useWindowDimensions,StatusBar } from 'react-native';
import { Container, Content, Title, Message, Footer } from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation';
import { useNavigation } from '@react-navigation/native';


type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
export function SchedulingComplete() {
  
  const { navigate } = useNavigation<HomeScreenNavigationProp>();

  function hanldeConfirm(){
     navigate('Home', { option: '' });
  }
  const { width } = useWindowDimensions();
  return (
    <Container>

      <StatusBar 
      barStyle='light-content'
      translucent
      backgroundColor='transparent'
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>
          Agora voce só precisa ir{'\n'}
          até a concessionária da RENTX{`\n`}
          pegar o seu automóvel.
        </Message>


        <Footer>
          <ConfirmButton title='OK' onPress={hanldeConfirm}/>
        </Footer>
      </Content>
    </Container>
  );
}
