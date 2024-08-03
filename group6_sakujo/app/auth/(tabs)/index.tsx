import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import App from './App';

function LogoTitle() {
  return (
    <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  );
}

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title='Click' onPress={() => navigation.navigate(App)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
