import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import LoginForm from '@/components/LoginForm'
import Flatlisttest from '@/components/Flatlisttest';
import ModalNew from '@/components/ModalNew';



const History = () => {
  return (
    <View style={styles.container}>
 <Flatlisttest/>
    </View>
  );
};

export default History;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000a0',
    },
  });