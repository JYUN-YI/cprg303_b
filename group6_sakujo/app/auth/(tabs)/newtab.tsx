import Posts from '@/components/Posts';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
   <Posts/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Vertically align items in the center
    alignItems: 'center',     // Horizontally align items in the center
  },
  centeredText: {
    textAlign: 'center', // Center the text horizontally
  },
});
