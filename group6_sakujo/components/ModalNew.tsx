import { View, Text, Button, Modal,StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react';

const ModalNew = () => {
const[isModelvalue,setModelvalue]=useState(false);

const toggeleModel=()=>{
   setModelvalue(!isModelvalue)
};

  return (
    <View style={styles.container}>
        <Button title="Open Model" onPress={toggeleModel}></Button>
        <Modal visible={isModelvalue} animationType="slide" onRequestClose={toggeleModel} presentationStyle="fullScreen">
       <View style={styles.modelcontent}>
        <Text>This is  a Model</Text>
        <Button title="close" onPress={toggeleModel}></Button>
     </View>
     </Modal>
     </View>
  );
};

export default ModalNew;
const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
},
modelcontent:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
}
});