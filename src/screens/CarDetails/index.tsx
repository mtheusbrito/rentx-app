import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';



import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer
} from './styles';
import { Button } from '../../components/Button';
import { RootStackParamList } from '../../@types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { getAccessoryIcon } from '../../utils/getAccessories';

 type SchedulingScreenNavigationProp = NativeStackNavigationProp<
   RootStackParamList,
   'Scheduling'
 >;
 type Params = RouteProp<RootStackParamList, 'CarDetails'>;
export function CarDetails() {

  const { navigate } = useNavigation<SchedulingScreenNavigationProp>();

  const {params: { car },} = useRoute<Params>();


  function handleConfirmRental() {
    navigate('Scheduling', { option: '' });
  }
  function handleBack(){
    navigate('Home');
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <CarImages>
        <ImageSlider
          imagesUrl={car.photos}
        ></ImageSlider>
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price} </Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((a)=>{
            return <Accessory key={a.type} name={a.name} icon={getAccessoryIcon(a.type)} />;
          })} 
         
         
        </Accessories>

        <About>
          {car.about}
        </About>
      </Content>

      <Footer>
        <Button
          title="Escolher periodo do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
