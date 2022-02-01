import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, TotalCars, HeaderContent } from './styles';
import Logo from './../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation';


type CarDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CarDetails'
>;

export function Home() {
  const { navigate } = useNavigation<CarDetailsScreenNavigationProp>();
  

  const carData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  };

  function handleDetails() {
   navigate('CarDetails', {option: ''});
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
     
      <Car data={carData} onPress={handleDetails}/>
    </Container>
  );
}
