import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
// toychable highligts

const Touchablefun = () => {
    const[count,setCount]=useState(0);
    const onPress=()=>setCount(count+1);
  return (
    <View style={styles.container}>
        <TouchableHighlight onPress={onPress}>
            <View>
                <View style={styles.button}><Text>Touchablhighlights</Text></View>
                <Text style={styles.counttext}>{count}</Text>
            </View>
        </TouchableHighlight>
        <TouchableWithoutFeedback>
        <View>
                <View style={styles.button}><Text>Touchablewithoutfeedback</Text></View>
                <Text style={styles.counttext}>{count}</Text>
            </View>
        </TouchableWithoutFeedback>
       <TouchableOpacity>
       <View>
                <View style={styles.button}><Text>TouchableOpacity</Text></View>
                <Text style={styles.counttext}>{count}</Text>
            </View>
       </TouchableOpacity>
     
    </View>


  );
};

export default Touchablefun;

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:10,
    marginTop:30,
},
button:{
    alignItems:'center',
    backgroundColor:'gray',
    padding:10,
},
counter:{
    alignItems:'center',
    padding:10,

},
counttext:{
    color:'#ggfgbv',
}


})