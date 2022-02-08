import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';


import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  DateValueContainer,
  Content,
Footer
} from './styles';
import ArrowSvg  from '../../assets/arrow.svg'
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { RootStackParamList } from '../../@types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


type SchedulingCompleteScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SchedulingComplete'
>;
export function Scheduling() {
  const { navigate } = useNavigation<SchedulingCompleteScreenNavigationProp>();


  function handleConfirmRental(){
    navigate('SchedulingComplete', { option: ''});
  }

  function handleChangeDay(){
    
  }
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma{`\n`}
          data de início e{`\n`}
          fim do aluguel.
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValueContainer selected={false}>
              <DateValue></DateValue>
            </DateValueContainer>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueContainer selected={false}>
              <DateValue></DateValue>
            </DateValueContainer>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar markedDates={} onDayPress={handleChangeDay} />
      </Content>
      <Footer>
        <Button title="Alugar agora" onPress={handleConfirmRental} color={theme.colors.success} />
      </Footer>
    </Container>
  );
}
