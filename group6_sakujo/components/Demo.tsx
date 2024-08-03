import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';



export default function Demo() {

  const [count,setCount]=useState(0);
  const onPress=()=>setCount(count+1);
  const handlePress=()=>{
    setCount(count+1)
  }
  return (
    <View style={styles.container}>
      
      <TouchableNativeFeedback onPress={onPress}>
      <ActivityIndicator size={40}></ActivityIndicator>
      <View style={[styles.card1, styles.card2]}>
      
     <Text>Touch Here</Text>
    
     <Text> Star Rating {count} </Text>
     </View>
      </TouchableNativeFeedback>

      
        <StatusBar style="auto" />
        <TouchableOpacity onPress={handlePress}>
        <MaterialCommunityIcons name="star" size={80}></MaterialCommunityIcons></TouchableOpacity>
        <TouchableOpacity><MaterialCommunityIcons name="star" size={80}></MaterialCommunityIcons></TouchableOpacity>
        <TouchableOpacity><MaterialCommunityIcons name="star" size={80}></MaterialCommunityIcons></TouchableOpacity>
        <TouchableOpacity><MaterialCommunityIcons name="star" size={80}></MaterialCommunityIcons></TouchableOpacity>
        <TouchableOpacity><MaterialCommunityIcons name="star" size={80}></MaterialCommunityIcons></TouchableOpacity>
       
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    color: 'darkmagenta',
    borderRadius: 8,
    textAlign: 'center',
    padding: 36,
    width: '80%',
    marginVertical: 20,
    shadowColor: 'aquablue',
    fontSize: 40,
    fontWeight: '600',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.26,
    shadowRadius: 5,
  },

  card1: {
    backgroundColor: 'gray',
    borderRadius: 8,
    padding: 36,
    width: '80%',
    marginVertical: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 1.26,
    shadowRadius: 5,
  },
  card2: {
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.26,
    shadowRadius: 5,
  },
});
