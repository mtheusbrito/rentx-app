import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, TotalCars, HeaderContent, CarList } from './styles';
import Logo from './../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation';
import {api} from '../../service/api';
import { useTheme } from  'styled-components'
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';
 
type CarDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CarDetails'
>;



export function Home() {
  const { navigate } = useNavigation<CarDetailsScreenNavigationProp>();
  const [cars, setCars] = useState<CarDTO[]>([] as CarDTO[]);
  const [loading, setLoading] = useState<boolean>(true);

  
  function handleDetails() {
   navigate('CarDetails', {option: ''});
  }

useEffect(()=>{
  fetchCars();


 async function fetchCars() {
   try{
    const { data } = await api.get<CarDTO[]>(`/cars`);
    setCars(data);
   }catch(error){
    console.log(error);
   }finally{
     setLoading(false);
   }
   

 }
},[])

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
          <TotalCars>{`Total de ${cars.length} ${cars.length === 1 ? `carro` : `carros` }`}</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
       <Load/>
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Car data={item} onPress={handleDetails} />}
        ></CarList>
      )}
    </Container>
  );
}
