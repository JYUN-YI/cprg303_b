import { StyleSheet, Text, View,Button, Modal } from 'react-native'
import React, { useState } from 'react'

const SampleModel = () => {
const[IsModelVisible,setModelVisible]=useState(false)
const ToggelModel=()=>{
setModelVisible(!IsModelVisible)
};

  return (
    <View style={styles.container}>
      <Text>SampleModel</Text>
      <Button title="Show Modal" onPress={ToggelModel}></Button>
      <View style={styles.modelcontent}>
        <Modal visible={IsModelVisible} animationType="slide">
        <Text> This is sample Model view</Text>
        <Button title="Hide Model" onPress={ToggelModel}></Button>
        </Modal>
      </View>
     
    </View>
  )
}

export default SampleModel

const styles = StyleSheet.create({

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

